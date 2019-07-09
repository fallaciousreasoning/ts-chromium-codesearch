import { getAnnotationsForFile } from "./codesearch/annotationsHelper";

const main = async () => {
    const annotations = await getAnnotationsForFile('src/chrome/browser/ui/web_applications/app_browser_controller.h');
}

main();