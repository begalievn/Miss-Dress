export interface Result {
    user_first_name: string;
    user_last_name: string;
    amount: string;
    totalCount: string;
}

export interface RootObject {
    statusCode: number;
    result: Result[];
}
