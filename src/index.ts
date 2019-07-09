import { getAnnotationsForFile } from "./codesearch/annotationsHelper";

getAnnotationsForFile('src/chrome/browser/ui/web_applications/app_browser_controller.h')
    .then(response => response.json())
    .then(console.log);