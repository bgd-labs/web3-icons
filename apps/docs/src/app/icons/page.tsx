import Fuse from "fuse.js";
import React, { useMemo } from "react";

import { AssetIconCard } from "@/components/AssetIconCard";
import { Branding } from "@/components/Branding";
import { ChainIconCard } from "@/components/ChainIconCard";
import { Search } from "@/components/Search";

import icons from "../../../../../icons/icons.json";
import { IconInfo, IconType } from "../../../../../src/scripts/types";

async function IconsPage({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {
  const searchString = searchParams?.search || "";

  const filteredIcons = useMemo(
    () =>
      new Fuse(icons as IconInfo[], {
        keys: ["chainId", "symbol"],
        threshold: 0.3,
        distance: 1000,
      })
        .search(searchString)
        .map((item) => item.item),
    [searchString],
  );

  return (
    <main className="p-4 md:p-8 xl:p-16">
      <Search placeholder="Enter asset symbol or chain id" />

      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        {(!filteredIcons.length && searchString === "" ? icons : filteredIcons)
          .filter((item) => item.name !== "Unknown")
          .map((item) => {
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
        {!filteredIcons.length && searchString !== "" && (
          <div>No icons with the specified search parameters were found</div>
        )}
      </div>

      <Branding />
    </main>
  );
}

export default IconsPage;
