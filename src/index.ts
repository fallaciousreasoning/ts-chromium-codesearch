import { getAnnotationsForFile } from "./codesearch/annotationsHelper";
import { AnnotationTypeValue } from "./codesearch/model/annotationTypeValue";
import { getXRefFor, xRefToString } from "./codesearch/xRefsHelper";
import { FileSpec } from "./codesearch/model/fileInfo";

const main = async () => {
    const fileSpec: FileSpec = {
        name: 'src/chrome/browser/ui/web_applications/app_browser_controller.h',
        package_name: 'chromium'
    };

    const annotations = await getAnnotationsForFile(fileSpec.name);
    const firstXRef = annotations.annotation.find(a => a.xref_signature)!;

    const xrefs = await getXRefFor(fileSpec, firstXRef);
    const output = xrefs.search_result.map(xRefToString).join('\n');
    console.log(output);
}

main();