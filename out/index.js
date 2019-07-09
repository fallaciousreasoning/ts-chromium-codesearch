"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var makeRequest_1 = require("./codesearch/makeRequest");
var annotationTypeValue_1 = require("./codesearch/model/annotationTypeValue");
makeRequest_1.makeRequest({
    annotation_request: {
        file_spec: {
            name: "src%2Fchrome%2Fbrowser%2Fui%2Fweb_applications%2Fapp_browser_controller.h",
            package_name: "chromium",
        },
        type: [
            { id: annotationTypeValue_1.AnnotationTypeValue.XREF_SIGNATURE }, { id: annotationTypeValue_1.AnnotationTypeValue.LINK_TO_DEFINITION }
        ]
    }
});
