import {AssetIcon} from '@bgd-labs/react-icons';
import {IconCard} from '@/components/IconCard';

import assets from "../../../../../icons/icons.json";

const IconsPage = () => {
  return (
    <main className="p-4 md:p-8 xl:p-16">
      <h2 className="mx-auto mb-12 text-left text-center text-4xl font-bold leading-snug lg:text-7xl">Assets icons list</h2>
      <div className="gap-2 flex flex-wrap items-center justify-center">
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
