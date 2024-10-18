"use client";

import { AssetTag } from "@bgd-labs/react-web3-icons/dist/utils/index";
import React, { useEffect } from "react";

import { AssetIcon } from "@/components/Web3Icons/AssetIcon";

const Page = () => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((current) => current + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div>{count}</div>
      <div>
        <AssetIcon symbol={"1inch"} assetTag={AssetTag.AToken} mono={false} />
        <AssetIcon symbol={"lend"} assetTag={AssetTag.AToken} mono={false} />
      </div>
    </div>
  );
};

export default Page;
