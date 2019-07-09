import { InternalLink } from "./internalLink";
import { FileSpec } from "./fileInfo";

export interface AnnotationsResponse {
    annotation_response: {
        return_code: number;
        annotation: Annotation[];
    }[];
    elapsed_ms: number;
}


export interface AnnotationType {
    id: number;
}

export interface Annotation {
    type: AnnotationType;
    range: Range;
    internal_link: InternalLink;
    kythe_xref_kind: number;
}

export interface AnnotationRequest {
    file_spec: FileSpec;
    type: AnnotationType[];
    md5?: string;
}