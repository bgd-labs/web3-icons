import Image from "next/image";

import twitterIcon from "@/assets/icons/twitter.svg";
import websiteIcon from "@/assets/icons/website.svg";

export const Branding = () => {
  return (
    <div className="mt-12 flex items-center justify-center text-sm text-[#c5c3d0]">
      <div>
        <div className="flex items-center justify-center gap-1">
          <div>by BGD Labs</div>
          <a
            href="https://twitter.com/bgdlabs"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-75"
          >
            <Image
              src={twitterIcon}
              className="h-6 w-6"
              alt="BGD Labs Official X Account"
            />
          </a>
          <a
            href="https://bgdlabs.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-75"
          >
            <Image
              src={websiteIcon}
              className="h-6 w-6"
              alt="BGD Labs Website"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
