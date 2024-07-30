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
### 1) You can use `AssetIcon` component.
#### AssetIcon type parameters
| Parameter      | Type                             | Description |
|:---------------|:---------------------------------| :------ |
| `symbol`       | `string`                         | The `symbol` parameter is not case sensitive, you can pass it as `AAVE` or `aave` or `AaVe`. The result will always be the AAVE asset token icon.
| `mono`         | `boolean`                        | If true then the icon is displayed in black and white.
| `assetTag`     | [`AssetTag`](src/utils/types.ts) | Asset tag, can be `aToken`, a circle is added around the standard icon, and can be `stataToken`, a circle with cuts is added around the standard icon.
| `formatSymbol` | `(symbol: string) => string`     | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.

```tsx
import { AssetTag } from "@bgd-labs/react-web3-icons/dist/utils";
import { AssetIcon } from "@bgd-labs/react-web3-icons";
export const ExampleUsage = () => {
  return (
    <div>
      <span>AAVE</span>
      <AssetIcon symbol="AAVE" assetTag={AssetTag.AToken} mono />
    </div>
  );
};
```
### 2) You can use `ChainIcon` component.
#### ChainIcon type parameters
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `chainId`   | `number`                         | Id of the chain.
| `mono`         | `boolean`                        | If true then the icon is displayed in black and white.
```tsx
import { ChainIcon } from "@bgd-labs/react-web3-icons";
export const ExampleUsage = () => {
  return (
    <div>
      <span>Ethereum</span>
      <ChainIcon chainId="1" mono />
    </div>
  );
};
```
### 3) You can use `WalletIcon` component.
#### WalletIcon type parameters
| Parameter  | Type                                | Description |
|:-----------|:------------------------------------| :------ |
| `walletName`   | `string`                            | Name of the wallet for example "Metamask".
| `mono`         | `boolean`                        | If true then the icon is displayed in black and white.
```tsx
import { WalletIcon } from "@bgd-labs/react-web3-icons";
export const ExampleUsage = () => {
  return (
    <div>
      <span>MetaMask</span>
      <WalletIcon walletName="MetaMask" mono />
    </div>
  );
};
```
### 4) The above examples use dynamic loading of icons, but you can also use icons with static loading. This option is not recommended for the `AssetIcon`.
#### Examples
```tsx
import { AssetTag } from "@bgd-labs/react-web3-icons/dist/utils";
import { StaticAssetIcon, StaticChainIcon, StaticWalletIcon } from "@bgd-labs/react-web3-icons";
export const ExampleUsage = () => {
  return (
    <div>
      <StaticAssetIcon symbol="AAVE" assetTag={AssetTag.AToken} mono />
      <StaticChainIcon chainId="1" mono />
      <StaticWalletIcon walletName="MetaMask" mono />
    </div>
  );
};
```
### 5) You can get chain or asset name without rpc call. Also you can check installed browser wallet name, and get icon for this wallet.
#### Get asset name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `symbol`   | `string`                         | The `symbol` parameter is not case sensitive, you can pass it as `AAVE` or `aave` or `AaVe`. The result will always be the AAVE asset token icon.
| `formatSymbol`   | `(symbol: string) => string`     | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.
```tsx
import { AssetIcon } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  const assetName = getAssetName({ symbol: "aave" });
  return (
    <div>
      <span>{assetName}</span>
      <AssetIcon "aave" />
    </div>
  );
};
```
#### Get chain name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `chainId`   | `number`                         | Id of the chain.
```tsx
import { ChainIcon } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  const chainName = getChainName({ chainId: 1 });
  return (
    <div>
      <span>{chainName}</span>
      <ChainIcon chainId={1} />
    </div>
  );
};
```
#### Check installed wallet name and use icon from package
```tsx
import { getWeb3WalletName } from "@bgd-labs/react-web3-icons/dist/utils";
import dynamic from "next/dynamic";
import { WalletIcon } from "@bgd-labs/react-web3-icons";
const InstalledBrowserWalletWallet = () => {
  const walletName = getWeb3WalletName();
  return (
    <div>
      {walletName}
      <WalletIcon walletName={walletName} />
    </div>
  );
};
export default dynamic(() => Promise.resolve(InstalledBrowserWalletWallet), {
  ssr: false,
});
```

## Copyright
2024 BGD Labs