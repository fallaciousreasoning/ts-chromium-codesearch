"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotationsHelper_1 = require("./codesearch/annotationsHelper");
annotationsHelper_1.getAnnotationsForFile('src/chrome/browser/ui/web_applications/app_browser_controller.h')
    .then(function (response) { return response.json(); })
    .then(console.log);
