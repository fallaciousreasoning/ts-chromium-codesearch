import { CombinedRequest } from "./model/requests";
import fetch from "node-fetch";

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

    // Make sure strings are url encoded.
    if (type == "string")
        value = encodeURIComponent(value);

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
        .join('&');

    if (!typename)
      return internals;

    return `${typename}=b&${internals}&${typename}=e`;
}

const codeSearchUrl = 'https://cs.chromium.org/codesearch/json'
export const makeRequest = (request: CombinedRequest) => {
    let name: string;
    if (request.annotation_request) {
        name = `annotation_request`;
    } else if (request.xref_search_request) {
        name = `xref_search_request`
    } else {
        throw new Error("Unsupported request");
    }

    const queryString = serializeObject('', request);
    const requestUrl = `${codeSearchUrl}/${name}:1?${queryString}`;
    return fetch(requestUrl).then(response => response.json());
}