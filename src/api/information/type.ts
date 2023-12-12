export interface EventsSearchParams {
    startDate?: string
    endDate?: string
    dates: string[]
    projects: string[]
    domains: string[]
    content: string
    page: number
    pageSize: number
}

export interface EventResponseItem {
    eventId: number
    date: string
    event: string
    hot: number
    domain: string
}

export interface EventNewsItem {
    content: string
    from: string
    title: string
    url: string
    createTime: string
}