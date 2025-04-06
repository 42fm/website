import { FaChrome, FaFirefox } from "react-icons/fa";

const browsers = {
  chrome: {
    element: <FaChrome size={24} />,
    link: "https://chrome.google.com/webstore/detail/42fm/djkopjknjkhhhlbpaooiffegfhibkdka",
    display_name: "chrome",
  },
  firefox: {
    element: <FaFirefox size={24} />,
    link: "https://addons.mozilla.org/firefox/addon/42fm/",
    display_name: "firefox",
  },
};

export default browsers;
