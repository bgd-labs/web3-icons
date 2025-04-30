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
      <Web3Icon
        symbol={iconSymbol}
        mono={false}
        loader={<IconLoader />}
        className="size-[70px]"
      />
    </div>
  );
};

export default Page;
