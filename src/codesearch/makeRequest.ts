import { CombinedRequest } from "./model/requests";

const serializeValue = (typename: string, value: any) => {
    const type = typeof value;
    if (type == 'function') return '';

    if (Array.isArray(value)) {
        return serializeArray(typename, value);
    } 
    
    // If not an array and type is object, serialize as object.
    if (type === 'object') {
        return serializeObject(typename, value);
    }

    // Must be a primitive:
    return `${typename}=${value}`;
}

const serializeArray = (typename: string, array: any[]): string => {
    return array.map(v => serializeValue(typename, v)).join('&');
}

const serializeObject = (typename: string, value: any): string => {
    const internals = Object.keys(value)
        .map(key => serializeValue(key, value[key])) // Get entry for value.
        .filter(string => string) // Non empty
        .join('&')

    return `${typename}=b&${internals}&${typename}=e`;
}

const codeSearchUrl = 'https://cs.chromium.org/codesearch/json'
export const makeRequest = (request: CombinedRequest) => {
    let name: string;
    if (request.annotation_request) {
        name = `annotation_request:1`;
    } else {
        throw new Error("Unsupported request");
    }

    const queryString = serializeValue(name, request);
    const requestUrl = `${codeSearchUrl}/${name}:1?${queryString}`;
    console.log(requestUrl);
}