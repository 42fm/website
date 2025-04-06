function Footer() {
  return (
    <div className="custom-container mx-auto my-0 flex items-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent to-gray-200"></div>
      <p className="px-6 py-4 bg-white outline outline-gray-200 min-w-fit rounded-2xl text-[0.8125rem] font-medium">
        If you wish to add 42fm to your own channel, please contact me on{" "}
        <a href="https://twitch.tv/loczuk">
          <span className="underline underline-offset-2">twitch</span>
        </a>
      </p>
      <div className="h-px w-full bg-gradient-to-l from-transparent to-gray-200"></div>
    </div>
  );
}

export default Footer;
