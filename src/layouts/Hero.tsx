import { useState } from "react";
import Button from "../components/Button";
import browsers from "../settings";
import { detectedBrowser } from "../utils/browser";

function Hero() {
  const [browser] = useState<Browsers>(detectedBrowser);

  return (
    <div className="custom-container mx-auto">
      <div className="mx-auto flex grow flex-col items-center justify-between gap-16 self-stretch px-4 py-16 md:px-8 lg:flex-row lg:gap-0 lg:px-16">
        <div className="flex flex-col items-center justify-center text-center text-black lg:w-min lg:items-start lg:text-left">
          <h1 className="m-0 text-3xl leading-[1.2] font-bold lg:text-5xl lg:whitespace-nowrap">
            Make your chat move
          </h1>
          <p className="mt-6 mb-8 max-w-prose leading-normal">
            42fm is a music extension for twitch that allows you to listen to
            music while you are waiting for your favorite streamer to go live
          </p>
          <Button
            bar
            icon={browsers[browser].element}
            onClick={() => window.open(browsers[browser].link, "_blank")}
          >
            {"Download for " + browsers[browser].display_name}
          </Button>
        </div>
        <img src="/assets/cover.png" alt="cover" width={372} height={658} />
      </div>
    </div>
  );
}

export default Hero;
