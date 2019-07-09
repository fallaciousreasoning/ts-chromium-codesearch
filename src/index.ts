import { getAnnotationsForFile } from "./codesearch/annotationsHelper";
import { AnnotationTypeValue } from "./codesearch/model/annotationTypeValue";
import { getXRefFor } from "./codesearch/xRefsHelper";
import { FileSpec } from "./codesearch/model/fileInfo";

const main = async () => {
    const fileSpec: FileSpec = {
        name: 'src/chrome/browser/ui/web_applications/app_browser_controller.h',
        package_name: 'chromium'
    };

    const annotations = await getAnnotationsForFile(fileSpec.name);
    const firstXRef = annotations.annotation.find(a => a.xref_signature)!;
    console.log(JSON.stringify(firstXRef));

    const xrefs = await getXRefFor(fileSpec, firstXRef);
    console.log(xrefs);
}

main();