// 信息模块下的事件相关的接口
import {EventNewsItem, EventResponseItem, EventsSearchParams} from "@/api/information/type.ts";
import {HttpClient, httpClient, Response, ResponseStrategy} from "@/utils/requests.ts";
import {AxiosResponse} from "axios";
import {seconds2string} from "@/utils/MixUtil.ts";

enum EventsAPI {
    LIST_URL = "/info/events/list",
    COUNT_URL = "/info/events",
    LIST_NEWS_URL = "/info/events/news",
}

class EventListStrategy implements ResponseStrategy<EventResponseItem[]> {
    handleResponse(response: AxiosResponse<any>): EventResponseItem[] {
        let res: EventResponseItem[] = [];
        if (response.data) {
            let r = (response.data as Response);
            let items: EventResponseItem[] = (r.data.items as EventResponseItem[]);
            if (items.length == 0) {
                return res;
            }
            for (let item of items) {
                res.push(item);
            }
        }
        return res;
    }
}

class EventCountStrategy implements ResponseStrategy<number> {
    handleResponse(response: AxiosResponse<any>): number {
        return (response.data.data as number);
    }
}

class EventNewsStrategy implements ResponseStrategy<EventNewsItem[]> {
    handleResponse(response: AxiosResponse<any>): EventNewsItem[] {
        console.log(response.data)
        const res = new Array<EventNewsItem>();
        for (let item of response.data.data.items) {
            res.push(
                {
                    content: item.content,
                    title: item.title,
                    from: item.from,
                    url: item.url,
                    createTime: seconds2string(item.createTime)
                }
            );
        }
        return res;
    }

}

export const listEvents = (data: EventsSearchParams) => {
    data.startDate = data.dates[0];
    data.endDate = data.dates[1];
    const client: HttpClient = httpClient;
    client.setResponseStrategy(new EventListStrategy());
    return client.post(EventsAPI.LIST_URL, data);
}

export const countEvents = (data: EventsSearchParams) => {
    data.startDate = data.dates[0];
    data.endDate = data.dates[1];
    const client: HttpClient = httpClient;
    client.setResponseStrategy(new EventCountStrategy());
    return client.post(EventsAPI.COUNT_URL, data);
}

export const listNewsByEventId = (eventId: number) => {
    const client: HttpClient = httpClient;
    client.setResponseStrategy(new EventNewsStrategy());
    return client.get(EventsAPI.LIST_NEWS_URL + "/" + eventId, {params: {page: 1}});
}