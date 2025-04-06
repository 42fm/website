function Header() {
  return (
    <header className="custom-container min-h-16 flex items-center justify-between py-4 box-border mx-auto my-0 w-full">
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
          className="p-2 bg-white outline-1 rounded-lg outline-[#E2E2E2] py-3 px-6"
        >
          Commands
        </a>
        <a
          href="https://twitch.tv/loczuk"
          className="p-2 bg-white outline-1 rounded-lg outline-[#E2E2E2] py-3 px-6"
        >
          Contact
        </a>
        <a
          href="https://github.com/42fm"
          className="p-2 bg-white outline-1 rounded-lg outline-[#E2E2E2]"
        >
          <img src="/assets/github.svg" alt="github icon" className="size-7" />
        </a>
      </div>
    </header>
  );
}

export default Header;

// `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=as9g1b0p5gcioxg2u02imxsh2xknzr&redirect_uri=https://api.42fm.app/twitch/callback&scope=user:read:email`,
// `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=5gc7vc6eq5ue8yuljg8k7q2xon7rx2&redirect_uri=http://localhost:5000/twitch/callback&scope=user:read:email`,

// https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=a716dwc6abd655dll9o8n604dfu3q3&redirect_uri=https://quickquiz.ovh/GameOld/TwitchLogin
