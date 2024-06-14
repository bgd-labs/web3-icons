import {AssetIcon} from '@bgd-labs/react-icons';
import {IconCard} from '@/components/IconCard';

import assets from "../../../../../icons/icons.json";

const IconsPage = () => {
  return (
    <main className="p-4 md:p-8 xl:p-16">
      <h2 className="mb-8 font-bold text-xl">Assets icons list:</h2>
      <div className="gap-2 grid grid-auto-cols grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 auto-rows-auto">
        {assets.map((asset) => (
          <IconCard key={asset.symbol} name={asset.name} symbol={asset.symbol}>
            <AssetIcon symbol={asset.symbol} variant="full" />
          </IconCard>
        ))}
      </div>
    </main>
  );
};

export default IconsPage;
