export interface Result {
    product_title: string;
    amount: string;
    totalCount: string;
}

export interface RootObject {
    statusCode: number;
    result: Result[];
}
