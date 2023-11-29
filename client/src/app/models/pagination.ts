export interface MetaData {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
}

export class PaginatedResponse<T> {
    items: T;
    metaData: MetaData;

    constructor(items: T, metadata: MetaData) {
        this.items = items;
        this.metaData = metadata;
    }
}