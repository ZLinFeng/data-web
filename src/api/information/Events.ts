// 信息模块下的事件相关的接口
import {EventResponseItem, EventsSearchParams} from "@/api/information/type.ts";
import {HttpClient, httpClient, Response, ResponseStrategy} from "@/utils/requests.ts";
import {AxiosResponse} from "axios";

enum EventsAPI {
    LIST_URL = "/info/events/list",
    COUNT_URL = "/info/events"
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