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
### 1) You can use `Web3Icon` component.
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
| `iconsPack?`    | `Record<string, string>`     | Need to pass iconsPack from library, to using static imports. This option is not recommended for the `symbol` icon.

```tsx
import { Web3Icon } from "@bgd-labs/react-web3-icons";
import { assetsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/assetsIconsPack";
import { chainsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/chainsIconsPack";
import { walletsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/walletsIconsPack";
import { brandsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/brandsIconsPack";
export const ExampleUsage = () => {
  return (
    <div>
      <Web3Icon symbol="AAVE" />
      <Web3Icon chainId={1} />
      <Web3Icon walletKey="MetaMask" />
      <Web3Icon brandKey="0x4e033931ad43597d96D6bcc25c280717730B58B1" />
      {/* static variants */}
      <Web3Icon symbol="AAVE" iconsPack={assetsIconsPack} />
      <Web3Icon chainId={1} iconsPack={chainsIconsPack} />
      <Web3Icon walletKey="MetaMask" iconsPack={walletsIconsPack} />
      <Web3Icon brandKey="0x4e033931ad43597d96D6bcc25c280717730B58B1" iconsPack={brandsIconsPack} />
    </div>
  );
};
```
### 2) You can get chain or asset name without rpc call. Also you can check installed browser wallet name, and get icon for this wallet.
#### Get asset name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `symbol`   | `string`                         | The `symbol` parameter is not case sensitive, you can pass it as `AAVE` or `aave` or `AaVe`. The result will always be the AAVE asset token icon.
| `formatSymbol`   | `(symbol: string) => string`     | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.
```tsx
import { Web3Icon } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  const assetName = getAssetName({ symbol: "aave" });
  return (
    <div>
      <span>{assetName}</span>
      <Web3Icon symbol="aave" />
    </div>
  );
};
```
#### Get chain name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `chainId`   | `number`                         | Id of the chain.
```tsx
import { Web3Icon } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  const chainName = getChainName({ chainId: 1 });
  return (
    <div>
      <span>{chainName}</span>
      <Web3Icon chainId={1} />
    </div>
  );
};
```
#### Check installed wallet name and use icon from package
```tsx
import { getWeb3WalletName } from "@bgd-labs/react-web3-icons/dist/utils";
import dynamic from "next/dynamic";
import { Web3Icon } from "@bgd-labs/react-web3-icons";
const InstalledBrowserWalletWallet = () => {
  const walletName = getWeb3WalletName();
  return (
    <div>
      {walletName}
      <Web3Icon walletKey={walletName} />
    </div>
  );
};
export default dynamic(() => Promise.resolve(InstalledBrowserWalletWallet), {
  ssr: false,
});
```

## Copyright
2024 BGD Labs