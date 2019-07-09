import { CodeSearchSerializable } from "./model/requests";

const serialize = (s: CodeSearchSerializable & any) => {
    let query = `${s.name}=b`;

    for (const key of Object.keys(s)) {
        if (key == '$name') continue;
        const value = s[key];

        // Don't serialize functions.
        if (typeof value === 'function') continue;

        if ('serialize' in s[key]) {
            query += `&${serialize(s[key])}`;
        } else {
            query += `&${key}=${s[key]}`
        }
    }
    query += `${s.$name}=e`;
    return query;
}

const codeSearchUrl = 'https://cs.chromium.org/codesearch/json'
export const makeRequest = (s: CodeSearchSerializable) => {
    const requestUrl = `${codeSearchUrl}/${s.$name}:1?${s.serialize}`

}