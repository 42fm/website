import { detect } from "detect-browser";

const newBrowser = detect();

let detectedBrowser: Browsers = "chrome";

switch (newBrowser && newBrowser.name) {
  case "chrome":
    detectedBrowser = "chrome";
    break;
  case "firefox":
    detectedBrowser = "firefox";
    break;
  default:
    detectedBrowser = "chrome";
}

export { detectedBrowser };
