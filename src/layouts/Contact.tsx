function Contact() {
  return (
    <div className="custom-container mx-auto">
      <div className="flex items-center px-4 py-4 md:px-8 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent to-gray-200" />
        <p className="min-w-fit rounded-2xl bg-white px-6 py-4 text-[0.8125rem] font-medium outline outline-gray-200">
          If you wish to add 42fm to your own channel, please contact me on{" "}
          <a href="https://twitch.tv/loczuk">
            <span className="underline underline-offset-2">twitch</span>
          </a>
        </p>
        <div className="h-px w-full bg-gradient-to-l from-transparent to-gray-200" />
      </div>
    </div>
  );
}

export default Contact;
