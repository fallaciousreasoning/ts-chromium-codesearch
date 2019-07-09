import { AnnotationType } from "./model/AnnotationType";

interface AnnotationRequest {
    package_name: "chromium";
    // FilePath
    name: string;

    // Pretty sure this is the changelist id from the commit. Comes from file info.
    changelist: string;

    // md5 hash of the file from the file info request.
    md5: string;

    // Not set, not sure.
    label: undefined;

    // Unsure.
    annotation_request: ["b", "e" ]
    file_spec: ["b", "e"]
    id: [1,2,4,8192]

    // Super unsure. This repeats.
    type: AnnotationType[];

    follow_branches: false;
}

export const getAnnotationsForFile = (filePath: string,
    annotationTypes=[AnnotationType.XREF_SIGNATURE, AnnotationType.LINK_TO_DEFINITION],
    md5=undefined) => {
    const request: AnnotationRequest = {
        
    }
    return makeRequest()
};
