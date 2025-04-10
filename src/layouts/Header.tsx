function Header() {
  return (
    <header className="custom-container mx-auto min-h-16 w-full">
      <div className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-16">
        <a href="/">
          <img
            className="block cursor-pointer"
            src="/assets/logo-32.png"
            alt="42fm"
            width="32px"
            height="32px"
          />
        </a>
        <div className="flex gap-3 text-sm font-medium">
          <a
            href="#commands"
            className="rounded-lg bg-white p-2 px-6 py-3 outline-1 outline-[#E2E2E2]"
          >
            Commands
          </a>
          <a
            href="https://twitch.tv/loczuk"
            className="rounded-lg bg-white p-2 px-6 py-3 outline-1 outline-[#E2E2E2]"
          >
            Contact
          </a>
          <a
            href="https://github.com/42fm"
            className="rounded-lg bg-white p-2 outline-1 outline-[#E2E2E2]"
          >
            <img
              src="/assets/github.svg"
              alt="github icon"
              className="size-7"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
