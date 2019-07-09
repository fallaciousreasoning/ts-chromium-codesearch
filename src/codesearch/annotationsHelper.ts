import { AnnotationTypeValue } from "./model/annotationTypeValue";
import { AnnotationType, Annotation, AnnotationRequest, AnnotationsResponse } from "./model/annotations";
import { FileSpec } from "./model/fileInfo";
import { makeRequest } from "./makeRequest";

export const getAnnotationsForFile = async (filePath: string,
    annotationTypes = [
        AnnotationTypeValue.XREF_SIGNATURE,
        AnnotationTypeValue.LINK_TO_DEFINITION
    ]) => {

    const response: AnnotationsResponse = await makeRequest({
        annotation_request: {
            file_spec: {
                name: filePath,
                package_name: 'chromium'
            },
            type: annotationTypes.map(t => ({ id: t }))
        }
    }) as any;

    return response.annotation_response[0];
};
