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
| Parameter       | Type                                  | Description |
|:----------------|:--------------------------------------| :------ |
| `iconType`      | `"asset", "chain", "wallet", "brand"` | One type of the icon.
| `iconKey`       | `string, number`                      | The `iconKey` parameter is not case sensitive. It's can be `assetSymbol`, `chainId` ,`walletName`, `brandName`, `poolAddress`.
| `mono?`         | `boolean`                             | If true then the icon is displayed in black and white.
| `assetTag?`     | `"a", "stata", "stk"`                 | Asset tag, can be `a`, a circle is added around the standard icon, and can be `stata`, a circle with cuts is added around the standard icon, and `stk` umbrella circle is added around the standart icon. (automatically determined when the asset symbol is passed from the contract)
| `formatSymbol?` | `(symbol: string) => string`          | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.

```tsx
import { DynamicIcon } from "@bgd-labs/react-web3-icons";
export const ExampleUsage = () => {
  return (
    <div>
      <DynamicIcon iconType="asset" iconKey="AAVE" />
      <DynamicIcon iconType="chain" iconKey={1} />
      <DynamicIcon iconType="wallet" iconKey="MetaMask" />
      <DynamicIcon iconType="brand" iconKey="0x4e033931ad43597d96D6bcc25c280717730B58B1" />
    </div>
  );
};
```
### 2) The above examples use dynamic loading of icons, but you can also use icons with static loading. Need to pass iconsPack from library. This option is not recommended for the `asset icon type`.
#### Examples
```tsx
import { StaticIcon } from "@bgd-labs/react-web3-icons";
import { assetsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/assetsIconsPack";
import { chainsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/chainsIconsPack";
import { walletsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/walletsIconsPack";
import { brandsIconsPack } from "@bgd-labs/react-web3-icons/dist/iconsPacks/brandsIconsPack";
export const ExampleUsage = () => {
  return (
    <div>
      <StaticIcon iconType="asset" iconKey="AAVE" mono iconsPack={assetsIconsPack} />
      <StaticIcon iconType="chain" iconKey={1} mono iconsPack={chainsIconsPack} />
      <StaticIcon iconType="wallet" iconKey="MetaMask" mono iconsPack={walletsIconsPack} />
      <StaticIcon iconType="brand" iconKey="0x4e033931ad43597d96D6bcc25c280717730B58B1" mono iconsPack={brandsIconsPack} />
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
      <DynamicIcon iconType="asset" iconKey="aave" />
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
      <ChainIcon iconType="chain" iconKey={1} />
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
      <DynamicIcon iconType="wallet" iconKey={walletName} />
    </div>
  );
};
export default dynamic(() => Promise.resolve(InstalledBrowserWalletWallet), {
  ssr: false,
});
```

## Copyright
2024 BGD Labs