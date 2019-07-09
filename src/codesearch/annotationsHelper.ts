import { AnnotationTypeValue } from "./model/annotationTypeValue";
import { AnnotationType } from "./model/annotations";
import { FileSpec } from "./model/fileInfo";

export const getAnnotationsForFile = (filePath: string,
    annotationTypes=[AnnotationTypeValue.XREF_SIGNATURE, AnnotationTypeValue.LINK_TO_DEFINITION],
    md5=undefined) => {
   
};
