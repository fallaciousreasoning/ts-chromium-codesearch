import { FileSpec } from "./fileInfo";
import { Match } from "./match";

export interface XRefSearchRequestResponse {
    xref_search_response: [XRefSearchRequestResponseItem];
    elapsed_ms: number;
}

interface TypeCount {
    type_id: number;
    type: "DEFINITION" | "DECLARATION" | "REFERENCE";
}

interface XRefSearchRequestResponseItem {
    status: number;
    search_result: XRefSearchResult[];
    estimated_total_type_count: TypeCount[];
    from_kythe: boolean;
    kythe_next_page_token: string;
    eliminated_type_count: TypeCount[];
}

interface XRefSearchResult {
    file: FileSpec;
    match: Match[];
}