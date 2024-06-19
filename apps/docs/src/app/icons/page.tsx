import { ChainIconCard } from "@/components/ChainIconCard";
import { IconCard } from "@/components/IconCard";

import assets from "../../../../../icons/assets-icons/assets-icons.json";
import chains from "../../../../../icons/chains-icons/chains-icons.json";

const IconsPage = () => {
  return (
    <main className="p-4 md:p-8 xl:p-16">
      <h2 className="mb-4 text-4xl font-bold">Assets icons</h2>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        {assets
          .filter((asset) => asset.symbol !== "unknown")
          .map((asset) => (
            <IconCard
              key={asset.symbol}
              name={asset.name}
              symbol={asset.symbol}
            />
          ))}
      </div>

      <h2 className="mb-4 mt-12 text-4xl font-bold">Chains icons</h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        {chains.map((chain) => (
          <ChainIconCard
            key={chain.chainId}
            chainId={chain.chainId}
            name={chain.name}
          />
        ))}
      </div>
    </main>
  );
};

export default IconsPage;
