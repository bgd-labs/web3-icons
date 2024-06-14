import {AssetIcon} from '@bgd-labs/react-icons';
import {IconCard} from '@/components/IconCard';

import assets from "../../../../../icons/icons.json";

const IconsPage = () => {
  return (
    <main className="p-24">
      <h2 className="mb-8 font-bold text-xl">Assets icons list:</h2>
      <div className="gap-2 grid grid-cols-10">
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
