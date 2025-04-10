function Commands() {
  return (
    <div className="custom-container mx-auto">
      <div className="px-4 py-8 md:px-8 lg:px-16 lg:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl" id="commands">
          <a href="#commands">Commands</a>
        </h2>
        <div className="space-y-8">
          <div className="space-y-4" data-id="section">
            <h3 className="text-xl font-semibold md:text-2xl">Everyone</h3>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>Add a song to the queue</CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm</Bubble>+
                  <BubbleSecondary>&lt;youtube link&gt;</BubbleSecondary>/
                  <BubbleSecondary>&lt;youtube video id&gt;</BubbleSecondary>/
                  <BubbleSecondary>&lt;search term&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm https://youtu.be/iL7uoLCbJoc</Bubble>
              </div>
            </div>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>Display current song</CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm song</Bubble>
                </div>
              </div>
            </div>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>Remove last added song</CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm wrong</Bubble>
                </div>
              </div>
            </div>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>
                Vote to skip the current song
              </CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm voteskip</Bubble>
                </div>
              </div>
            </div>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>
                Display available commands
              </CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm help</Bubble>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4" data-id="section">
            <h3 className="text-xl font-semibold md:text-2xl">
              Broadcaster, Moderator, Owner
            </h3>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>Manage users on channel</CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm ban</Bubble>+
                  <BubbleSecondary>&lt;username&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm ban username123</Bubble>
              </div>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm unban</Bubble>+
                  <BubbleSecondary>&lt;username&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm unban username123</Bubble>
              </div>
            </div>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>Manage songs</CommandDescription>
              <div className="flex gap-2" data-id="command">
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm play</Bubble>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm pause</Bubble>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm skip</Bubble>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm clear</Bubble>
                </div>
              </div>
            </div>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>Disconnect the bot</CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm disconnect</Bubble>
                </div>
              </div>
            </div>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>Manage channel settings</CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm set minViews</Bubble>+
                  <BubbleSecondary>&lt;number of views&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm set minViews 1000</Bubble>
              </div>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm set minDuration</Bubble>+
                  <BubbleSecondary>&lt;number of seconds&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm set minDuration 60</Bubble>
              </div>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm set maxDuration</Bubble>+
                  <BubbleSecondary>&lt;number of seconds&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm set maxDuration 600</Bubble>
              </div>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm set streamSync</Bubble>+
                  <BubbleSecondary>&lt;boolean&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm set streamSync true</Bubble>
              </div>
            </div>
          </div>
          <div className="space-y-4" data-id="section">
            <h3 className="text-xl font-semibold md:text-2xl">Owner</h3>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>Uptime</CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm uptime</Bubble>{" "}
                </div>
              </div>
            </div>
            <div className="space-y-2" data-id="subsection">
              <CommandDescription>Manage channel settings</CommandDescription>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm channels add</Bubble>+
                  <BubbleSecondary>&lt;username&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm channels add user123</Bubble>
              </div>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm channels enable</Bubble>+
                  <BubbleSecondary>&lt;username&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm channels enable user123</Bubble>
              </div>
              <div
                className="flex flex-col justify-between gap-1 md:flex-row"
                data-id="command"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Bubble>!fm channels disable</Bubble>+
                  <BubbleSecondary>&lt;username&gt;</BubbleSecondary>
                </div>
                <Bubble>!fm channels disable user123</Bubble>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble(props: { children: string; details?: string }) {
  return (
    <span className="relative inline-block h-fit min-w-fit rounded-lg bg-white px-3 py-2 text-[13px] leading-[1.5] font-medium outline outline-gray-200 md:rounded-2xl md:px-6 md:py-4">
      {props.children}
      {/* <span className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 bg-white outline outline-gray-200 rounded-full size-4">
          i
        </span> */}
    </span>
  );
}

function BubbleSecondary(props: { children: string }) {
  return (
    <span className="inline-block h-fit min-w-fit rounded-lg bg-[#EEEEEE] px-3 py-2 text-[13px] leading-[1.5] font-medium outline outline-gray-200 md:rounded-2xl md:px-6 md:py-4">
      {props.children}
    </span>
  );
}

function CommandDescription(props: { children: string }) {
  return (
    <span className="block text-[13px] leading-[1.5] font-semibold">
      {props.children}
    </span>
  );
}
export default Commands;
