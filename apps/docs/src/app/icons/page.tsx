import { ChainIconCard } from "@/components/ChainIconCard";
import { IconCard } from "@/components/IconCard";

import icons from "../../../../../icons/icons.json";
import { IconType } from "../../../../../src/scripts/types";

const IconsPage = () => {
  return (
    <main className="p-4 md:p-8 xl:p-16">
      <h2 className="mb-4 text-4xl font-bold">Assets icons</h2>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        {icons
          .filter((asset) => asset.type.includes(IconType.asset))
          .filter((asset) => asset.symbol !== "unknown")
          .map((asset) => (
            <IconCard
              key={asset.symbol}
              name={asset.name ?? ""}
              symbol={asset.symbol ?? ""}
              icons={asset.icons}
            />
          ))}
      </div>

      <h2 className="mb-4 mt-12 text-4xl font-bold">Chains icons</h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        {icons
          .filter((asset) => asset.type.includes(IconType.chain))
          .map((chain) => (
            <ChainIconCard
              key={chain.chainId}
              chainId={chain.chainId ?? 1}
              name={chain.chainName ?? chain.name ?? "Unknown"}
              iconPath={chain.icons.mono}
            />
          ))}
      </div>
    </main>
  );
};

export default IconsPage;
