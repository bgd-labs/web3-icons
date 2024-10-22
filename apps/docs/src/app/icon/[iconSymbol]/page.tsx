"use client";

import { Web3Icon } from "@bgd-labs/react-web3-icons";
import { FC } from "react";

import { IconLoader } from "@/components/IconCard";

type PageProps = {
  params: {
    iconSymbol: string;
  };
};

const Page: FC<PageProps> = ({ params }) => {
  const { iconSymbol } = params;
  return (
    <div>
      <div>
        <Web3Icon
          symbol={iconSymbol}
          assetTag="a"
          mono={false}
          loader={<IconLoader />}
        />
      </div>
    </div>
  );
};

export default Page;
