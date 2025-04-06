import { useState } from "react";
import { Browsers } from "..";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import browsers from "../settings";
import { detectedBrowser } from "../utils/browser";

const Home = () => {
  const [browser] = useState<Browsers>(detectedBrowser);

  return (
    <div className="App">
      <Header />
      <div className="flex grow flex-row items-center justify-between self-stretch custom-container mx-auto my-16">
        <div className="items-left flex flex-col justify-center text-black">
          <h1 className="m-0 text-5xl leading-[1.2] font-bold ">
            Make your chat move
          </h1>
          <p className="mt-6 mb-8 leading-normal">
            42fm is a music extension for twitch that allows you to listen to{" "}
            <br></br>
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
        <img src="/assets/cover.png" alt="cover" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
