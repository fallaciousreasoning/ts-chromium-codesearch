import { makeRequest } from "./codesearch/makeRequest";
import { AnnotationTypeValue } from "./codesearch/model/annotationTypeValue";

makeRequest({
    annotation_request: {
        file_spec: {
            name: "src%2Fchrome%2Fbrowser%2Fui%2Fweb_applications%2Fapp_browser_controller.h",
            package_name: "chromium",
        },
        type: [
            { id: AnnotationTypeValue.XREF_SIGNATURE }, { id: AnnotationTypeValue.LINK_TO_DEFINITION }
        ]
    }
});