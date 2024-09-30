import { AssetTag } from "@bgd-labs/react-web3-icons/dist/utils/index";
import Fuse from "fuse.js";
import React, { useMemo } from "react";

import { AssetIconCard } from "@/components/AssetIconCard";
import { BrandIconCard } from "@/components/BrandIconCard";
import { Branding } from "@/components/Branding";
import { ChainIconCard } from "@/components/ChainIconCard";
import { Search } from "@/components/Search";
import { WalletIconCard } from "@/components/WalletIconCard";

import icons from "../../../../../icons/icons.json";
import {
  IconFormat,
  IconInfo,
  IconType,
} from "../../../../../src/scripts/types";

async function IconsPage({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {
  const searchString = searchParams?.search ?? "";

  const filteredIcons = useMemo(
    () =>
      new Fuse(icons as IconInfo[], {
        keys: ["chainId", "symbol", "identityFlag", "walletName", "brandName"],
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
                <React.Fragment key={asset?.symbol ?? asset?.chainId}>
                  <AssetIconCard
                    name={asset.name ?? ""}
                    symbol={asset?.symbol ?? ""}
                    chainId={asset.chainId}
                    chainName={asset.chainName}
                    icons={asset.icons}
                  />
                  {asset.icons[IconFormat.aToken] && (
                    <AssetIconCard
                      name={asset.name ?? ""}
                      symbol={asset?.symbol ?? ""}
                      chainId={asset.chainId}
                      chainName={asset.chainName}
                      icons={asset.icons}
                      assetTag={AssetTag.AToken}
                    />
                  )}
                  {asset.icons[IconFormat.stataToken] && (
                    <AssetIconCard
                      name={asset.name ?? ""}
                      symbol={asset?.symbol ?? ""}
                      chainId={asset.chainId}
                      chainName={asset.chainName}
                      icons={asset.icons}
                      assetTag={AssetTag.StataToken}
                    />
                  )}
                  {asset.icons[IconFormat.stkToken] && (
                    <AssetIconCard
                      name={asset.name ?? ""}
                      symbol={asset?.symbol ?? ""}
                      chainId={asset.chainId}
                      chainName={asset.chainName}
                      icons={asset.icons}
                      assetTag={AssetTag.STKToken}
                    />
                  )}
                </React.Fragment>
              );
            } else if (asset.type.includes(IconType.chain)) {
              return (
                <ChainIconCard
                  key={asset.chainId}
                  chainId={asset.chainId ?? 1}
                  name={asset.chainName ?? asset.name ?? "Unknown"}
                  icons={asset.icons}
                />
              );
            } else if (asset.type.includes(IconType.wallet)) {
              return (
                <WalletIconCard
                  icons={asset.icons}
                  name={asset?.walletName ?? "Unknown"}
                />
              );
            } else if (asset.type.includes(IconType.brand)) {
              return (
                <BrandIconCard
                  icons={asset.icons}
                  name={asset?.brandName ?? "Unknown"}
                />
              );
            }
          })}
        {!filteredIcons.length && searchString !== "" && (
          // TODO: need add image
          <div>No icons with the specified search parameters were found</div>
        )}
      </div>

      <Branding />
    </main>
  );
}

export default IconsPage;
