# React web3 icons
This package includes all the icons in several variations related to the Aave ecosystem. Is only suitable for use if you have a `react` application.

### Installation
#### npm
<code>npm i @bgd-labs/react-web3-icons</code>
#### yarn
<code>yarn add @bgd-labs/react-web3-icons</code>
#### pnpm
<code>pnpm add @bgd-labs/react-web3-icons</code>

### Usage
You have two use cases of this package:
1) You can directly use the icon you need as a react component. This will be just a svg, which you can style if necessary.
```tsx
import { IconAaveFull } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  return <IconAaveFull />;
};
```
2) You can use `AssetIcon` component.

| Parameter  | Type                             | Description |
|:-----------|:---------------------------------| :------ |
| `symbol`   | `string`                         | The `symbol` parameter is not case sensitive, you can pass it as `AAVE` or `aave` or `AaVe`. The result will always be the AAVE asset token icon.
| `variant`  | [`TokenVariant`](./src/types.ts) | Color variant of the icon, maybe full is color, and mono is black and white.
| `tokenTag` | [`TokenTag`](./src/types.ts)     | Token tag, can be `aToken`, a circle is added around the standard icon, and can be `stataToken`, a circle with cuts is added around the standard icon.
| `formatSymbol`   | `(symbol: string) => string`     | If you have a special condition for asset symbol formatting, you can replace the formatting function inside the component.

```tsx
import { AssetIcon } from "@bgd-labs/react-web3-icons";
export const UsageExample = () => {
  return <AssetIcon symbol="aave" />;
};
```

## Copyright
2024 BGD Labs