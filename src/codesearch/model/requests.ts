import { AnnotationRequest } from "./annotations";
import { XRefSearchRequest } from "./xRefs";

export interface CombinedRequest {
    annotation_request?: AnnotationRequest;
    xref_search_request?: XRefSearchRequest;
}