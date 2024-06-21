# React web3 icons
DOCS WIP

This package includes all the icons in several variations related to the Aave ecosystem. Is only suitable for use if you have a `react` application.

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
import { IconAaveFull } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  return <IconAaveFull />;
};
```
### 2) You can use `AssetIcon` or `ChainIcon` components.

#### AssetIcon
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `symbol`   | `string`                         | The `symbol` parameter is not case sensitive, you can pass it as `AAVE` or `aave` or `AaVe`. The result will always be the AAVE asset token icon.
| `variant`  | [`TokenVariant`](src/utils/types.ts) | Color variant of the icon, maybe full is color, and mono is black and white.
| `tokenTag` | [`TokenTag`](src/utils/types.ts)     | Token tag, can be `aToken`, a circle is added around the standard icon, and can be `stataToken`, a circle with cuts is added around the standard icon.
| `formatSymbol`   | `(symbol: string) => string`     | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.

```tsx
import { AssetIcon } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  return <AssetIcon symbol="aave" />;
};
```

#### ChainIcon
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `chainId`   | `number`                         | Id of the chain.

```tsx
import { ChainIcon } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  return <ChainIcon chainId={1} />;
};
```

### 3) You can get chain or asset name without rpc call.
#### Get asset name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `symbol`   | `string`                         | The `symbol` parameter is not case sensitive, you can pass it as `AAVE` or `aave` or `AaVe`. The result will always be the AAVE asset token icon.
| `formatSymbol`   | `(symbol: string) => string`     | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.

```tsx
import { AssetIcon, getAssetName } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  const assetName = getAssetName({ symbol: "aave" });
  return <div><span>{assetName}</span><AssetIcon symbol="aave" /></div>;
};
```
#### Get chain name
| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `chainId`   | `number`                         | Id of the chain.

```tsx
import { ChainIcon, getChainName } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  const chainName = getChainName({ chainId: 1 });
  return <div><span>{chainName}</span><ChainIcon chainId={1} /></div>;
};
```

## Copyright
2024 BGD Labs