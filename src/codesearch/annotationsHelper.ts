import { AnnotationTypeValue } from "./model/annotationTypeValue";
import { AnnotationType } from "./model/annotations";
import { FileSpec } from "./model/fileInfo";
import { makeRequest } from "./makeRequest";

export const getAnnotationsForFile = (filePath: string,
    annotationTypes = [
        AnnotationTypeValue.XREF_SIGNATURE,
        AnnotationTypeValue.LINK_TO_DEFINITION
    ]) => {

    return makeRequest({
        annotation_request: {
            file_spec: {
                name: filePath,
                package_name: 'chromium'
            },
            type: annotationTypes.map(t => ({ id: t }))
        }
    })
};
