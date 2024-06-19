# Web3 icons library
Svg set of web3 assets icons and utils for easy generation.

### Installation
We have prepared a package with all the icons for easy use in the React.js ecosystem. Described in more detail [here](./packages/react-web3-icons/README.md).

#### npm
<code>npm i @bgd-labs/react-web3-icons</code>
#### yarn
<code>yarn add @bgd-labs/react-web3-icons</code>
#### pnpm
<code>pnpm add @bgd-labs/react-web3-icons</code>

### Adding new asset icon
1. Add new `svg` icon files to `src/assets/assets-icons` folder
2. Naming convention is `[symbol]_mono.svg` and `[symbol]_full.svg`
3. Prepare a metadata file in `src/assets/assets-icons` folder with the same name as the icon file, but with `.json` extension:
```json
{
  "name": "Aave",
  "symbol": "aave",
  "symbolAliases": [],
  "variations": [
    "aToken",
    "stataToken"
  ]
}
```
4. Generate icons and react components, run:
```bash
pnpm generate
```

### Adding new chain icon
1. Add new `svg` icon files to `src/assets/chains-icons` folder
2. Naming convention is `[chainName.replaceAll(/\s/g, '').toLowerCase()].svg`
3. Prepare a metadata file in `src/assets/chains-icons` folder with the same name as the icon file, but with `.json` extension:

```json
{
  "name": "Ethereum",
  "chainId": 1
}
```
4. Generate icons and react components, run:
```bash
pnpm generate
```

### Running docs project

To run docs website locally:
```bash
pnpm --filter docs dev
```

## Copyright
2024 BGD Labs