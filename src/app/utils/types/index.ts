export type AnyFunction = (...args: any[]) => any;

export enum ApiMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}
