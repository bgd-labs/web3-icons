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
### 1) You can use `DynamicIcon` component.
#### DynamicIcon type parameters
| Parameter       | Type                         | Description |
|:----------------|:-----------------------------| :------ |
| `symbol?`       | `string`                     | The symbol parameter is not case sensitive, you can pass it as AAVE or aave or AaVe. The result will always be the AAVE asset token icon.
| `chainId?`      | `number`                     | Id of the chain.
| `walletKey?`    | `string`                     | Name of the wallet for example "Metamask".
| `brandKey?`     | `string`                     | Address of the pool or name of the brand for example "Lido".
| `mono?`         | `boolean`                    | If true then the icon is displayed in black and white.
| `assetTag?`     | `"a", "stata", "stk"`        | Asset tag, can be `a`, a circle is added around the standard icon, and can be `stata`, a circle with cuts is added around the standard icon, and `stk` umbrella circle is added around the standart icon. (automatically determined when the asset symbol is passed from the contract)
| `formatSymbol?` | `(symbol: string) => string` | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.

```tsx
import { DynamicIcon } from "@bgd-labs/react-web3-icons";
export const ExampleUsage = () => {
  return (
    <div>
      <DynamicIcon symbol="AAVE" />
      <DynamicIcon chainId={1} />
      <DynamicIcon walletKey="MetaMask" />
      <DynamicIcon brandKey="0x4e033931ad43597d96D6bcc25c280717730B58B1" />
    </div>
  );
};
```
### 2) The above examples use dynamic loading of icons, but you can also use icons with static loading. Need to pass iconsPack from library. This option is not recommended for the `asset icon type`.
#### Examples
```tsx
import { StaticIcon } from "@bgd-labs/react-web3-icons";
export const ExampleUsage = () => {
  return (
    <div>
      <StaticIcon symbol="AAVE" mono />
      <StaticIcon chainId={1} mono />
      <StaticIcon walletKey="MetaMask" mono />
      <StaticIcon brandKey="0x4e033931ad43597d96D6bcc25c280717730B58B1" mono />
    </div>
  );
};
```
### 3) You can get chain or asset name without rpc call. Also you can check installed browser wallet name, and get icon for this wallet.
#### Get asset name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `symbol`   | `string`                         | The `symbol` parameter is not case sensitive, you can pass it as `AAVE` or `aave` or `AaVe`. The result will always be the AAVE asset token icon.
| `formatSymbol`   | `(symbol: string) => string`     | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.
```tsx
import { DynamicIcon } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  const assetName = getAssetName({ symbol: "aave" });
  return (
    <div>
      <span>{assetName}</span>
      <DynamicIcon symbol="aave" />
    </div>
  );
};
```
#### Get chain name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `chainId`   | `number`                         | Id of the chain.
```tsx
import { DynamicIcon } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  const chainName = getChainName({ chainId: 1 });
  return (
    <div>
      <span>{chainName}</span>
      <DynamicIcon chainId={1} />
    </div>
  );
};
```
#### Check installed wallet name and use icon from package
```tsx
import { getWeb3WalletName } from "@bgd-labs/react-web3-icons/dist/utils";
import dynamic from "next/dynamic";
import { DynamicIcon } from "@bgd-labs/react-web3-icons";
const InstalledBrowserWalletWallet = () => {
  const walletName = getWeb3WalletName();
  return (
    <div>
      {walletName}
      <DynamicIcon walletKey={walletName} />
    </div>
  );
};
export default dynamic(() => Promise.resolve(InstalledBrowserWalletWallet), {
  ssr: false,
});
```

## Copyright
2024 BGD Labs