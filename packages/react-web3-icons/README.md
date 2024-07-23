# React web3 icons

Package with some of web3 assets, chains and web3 wallets icons for easy use in the React.js ecosystem.

### Installation
#### npm
<code>npm i @bgd-labs/react-web3-icons</code>
#### yarn
<code>yarn add @bgd-labs/react-web3-icons</code>
#### pnpm
<code>pnpm add @bgd-labs/react-web3-icons</code>

### Usage
### 1) You can directly use the icon you need as a react component. This will be just a svg, which you can style if necessary.
```tsx
import { IconAaveFull } from "@bgd-labs/react-web3-icons/components";
export const UsageExample = () => {
  return <IconAaveFull />;
};
```
### 2) You can use `Web3DynamicIcon` component.
#### Basic component example with this dynamic component (example with fallbacks: [Web3Icon.tsx](../../apps/docs/src/components/Web3Icon.tsx))
```tsx
import { Web3DynamicIcon } from "@bgd-labs/react-web3-icons";
import {
  AssetIconProps,
  ChainType,
  getAssetIconNameAndPath,
  getChainIconNameAndPath,
  getWalletIconNameAndPath,
  IconInfo,
  WalletType,
  Web3IconType,
} from "@bgd-labs/react-web3-icons/dist/utils";
interface Web3IconProps {
  iconInfo:
    | IconInfo<AssetIconProps>
    | IconInfo<Pick<ChainType, "chainId" | "variant">>
    | IconInfo<Pick<WalletType, "walletName" | "variant">>;
}
/**
 * Renders an asset or chain or wallet icon specified by icon type and props.
 */
export const Web3Icon = ({ ...props }: Web3IconProps) => {
  let iconPath = undefined;
  if (props.iconInfo.type === Web3IconType.asset) {
    const assetInfo = getAssetIconNameAndPath(
      props.iconInfo.info as AssetIconProps,
    );
    iconPath = assetInfo.iconPathToRepo;
  } else if (props.iconInfo.type === Web3IconType.chain) {
    const chainInfo = getChainIconNameAndPath(
      props.iconInfo.info as Pick<ChainType, "chainId" | "variant">,
    );
    iconPath = chainInfo.iconPathToRepo;
  } else if (props.iconInfo.type === Web3IconType.wallet) {
    const walletInfo = getWalletIconNameAndPath(
      props.iconInfo.info as Pick<WalletType, "walletName" | "variant">,
    );
    iconPath = walletInfo.iconPathToRepo;
  }
  if (!iconPath) {
    return <div>Loading</div>;
  }
  return <Web3DynamicIcon src={iconPath} loader={<div>Loading</div>} />;
};
```
#### AssetIcon type parameters
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `symbol`   | `string`                         | The `symbol` parameter is not case sensitive, you can pass it as `AAVE` or `aave` or `AaVe`. The result will always be the AAVE asset token icon.
| `variant`  | [`IconVariant`](src/utils/types.ts) | Color variant of the icon, maybe full is color, and mono is black and white.
| `tokenTag` | [`AssetTag`](src/utils/types.ts)     | Asset tag, can be `aToken`, a circle is added around the standard icon, and can be `stataToken`, a circle with cuts is added around the standard icon.
| `formatSymbol`   | `(symbol: string) => string`     | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.
#### ChainIcon type parameters
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `chainId`   | `number`                         | Id of the chain.
| `variant`  | [`IconVariant`](src/utils/types.ts) | Color variant of the icon, maybe full is color, and mono is black and white.
#### WalletIcon type parameters
| Parameter  | Type                                | Description |
|:-----------|:------------------------------------| :------ |
| `walletName`   | `string`                            | Name of the wallet for example "Metamask".
| `variant`  | [`IconVariant`](src/utils/types.ts) | Color variant of the icon, maybe full is color, and mono is black and white.
### 3) You can get chain or asset name without rpc call. Also you can check installed browser wallet, and get icon and name of this wallet.
#### Get asset name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `symbol`   | `string`                         | The `symbol` parameter is not case sensitive, you can pass it as `AAVE` or `aave` or `AaVe`. The result will always be the AAVE asset token icon.
| `formatSymbol`   | `(symbol: string) => string`     | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.
```tsx
import {
  getAssetName,
  IconVariant,
  Web3IconType,
} from "@bgd-labs/react-web3-icons/dist/utils";
import { Web3Icon } from "@/components/Web3Icon";
export const UsageExample = () => {
  const assetName = getAssetName({ symbol: "aave" });
  return (
    <div>
      <span>{assetName}</span>
      <Web3Icon
        iconInfo={{
          type: Web3IconType.asset,
          info: { symbol: "aave", variant: IconVariant.Full },
        }}
      />
    </div>
  );
};
```
#### Get chain name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `chainId`   | `number`                         | Id of the chain.
```tsx
import {
  getChainName,
  IconVariant,
  Web3IconType,
} from "@bgd-labs/react-web3-icons/dist/utils";
import { Web3Icon } from "@/components/Web3Icon";
export const UsageExample = () => {
  const chainName = getChainName({ chainId: 1 });
  return (
    <div>
      <span>{chainName}</span>
      <Web3Icon
        iconInfo={{
          type: Web3IconType.chain,
          info: { chainId: 1, variant: IconVariant.Full },
        }}
      />
    </div>
  );
};
```
#### Get wallet name
| Parameter  | Type     | Description |
|:-----------|:---------| :------ |
| `walletName`   | `string` | Name of the wallet.
```tsx
import {
  getWalletName,
  IconVariant,
  Web3IconType,
} from "@bgd-labs/react-web3-icons/dist/utils";
import { Web3Icon } from "@/components/Web3Icon";
export const UsageExample = () => {
  const walletName = getWalletName({ walletName: "1inchwallet" });
  return (
    <div>
      <span>{walletName}</span>
      <Web3Icon
        iconInfo={{
          type: Web3IconType.wallet,
          info: { walletName: "1inchwallet", variant: IconVariant.Full },
        }}
      />
    </div>
  );
};
```
#### Get installed wallet name and icon
```tsx
"use client";
import {
  getWeb3WalletName,
  IconVariant,
  Web3IconType,
} from "@bgd-labs/react-web3-icons/dist/utils";
import dynamic from "next/dynamic";
import { Web3Icon } from "@/components/Web3Icon";
const InstalledBrowserWalletWallet = () => {
  const walletName = getWeb3WalletName();
  return (
    <div>
      {walletName}
      <Web3Icon
        iconInfo={{
          type: Web3IconType.wallet,
          info: { walletName, variant: IconVariant.Full },
        }}
      />
    </div>
  );
};
export default dynamic(() => Promise.resolve(InstalledBrowserWalletWallet), {
  ssr: false,
});
```

## Copyright
2024 BGD Labs