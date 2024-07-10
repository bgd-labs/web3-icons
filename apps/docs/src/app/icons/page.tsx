// TODO: need add search

import React from "react";

import { AssetIconCard } from "@/components/AssetIconCard";
import { Branding } from "@/components/Branding";
import { ChainIconCard } from "@/components/ChainIconCard";

import icons from "../../../../../icons/icons.json";
import { IconType } from "../../../../../src/scripts/types";

const IconsPage = () => {
  return (
    <main className="p-4 md:p-8 xl:p-16">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        {icons.map((item) => {
          const asset = item;
          if (asset.type.includes(IconType.asset)) {
            return (
              <AssetIconCard
                key={asset?.symbol ?? asset?.chainId}
                name={asset.name ?? ""}
                symbol={asset?.symbol ?? ""}
                chainId={asset.chainId}
                chainName={asset.chainName}
                icons={asset.icons}
              />
            );
          } else {
            return (
              <ChainIconCard
                key={asset.chainId}
                chainId={asset.chainId ?? 1}
                name={asset.chainName ?? asset.name ?? "Unknown"}
                iconPath={asset.icons.mono}
              />
            );
          }
        })}
      </div>

      <Branding />
    </main>
  );
};

export default IconsPage;
