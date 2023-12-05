export interface EventsSearchParams {
    startDate?: string,
    endDate?: string,
    dates: string[],
    projects: string[],
    domains: string[],
    content: string,
    page: number,
    pageSize: number,
}

export interface EventResponseItem {
    date: string,
    event: string,
    hot: number,
    domain: string
}