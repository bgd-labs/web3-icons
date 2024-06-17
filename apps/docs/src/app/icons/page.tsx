import { IconCard } from "@/components/IconCard";

import assets from "../../../../../icons/icons.json";

const IconsPage = () => {
  return (
    <main className="p-4 md:p-8 xl:p-16">
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
    </main>
  );
};

export default IconsPage;
