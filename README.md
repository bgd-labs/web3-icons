# Web3 icons library
Svg set of web3 icons and utils for easy generation and use.

### Installation
Package with some of web3 assets, chains and web3 wallets icons for easy use in the React.js ecosystem. Described in more detail [here](./packages/react-web3-icons/README.md).

#### npm
<code>npm i @bgd-labs/react-web3-icons</code>
#### yarn
<code>yarn add @bgd-labs/react-web3-icons</code>
#### pnpm
<code>pnpm add @bgd-labs/react-web3-icons</code>

### Adding new asset icon
1. Add new `svg` icon files to `src/assets` folder
2. Naming convention is `[symbol]_mono.svg` and `[symbol]_full.svg`
3. Prepare a metadata file in `src/assets` folder with the same name as the icon file, but with `.json` extension:
```json
{
  "type": ["asset"],
  "name": "Aave Token",
  "symbol": "aave",
  "symbolAliases": [
    "AAVE",
    "AAVE.e"
  ],
  "variations": [
    "aToken",
    "stataToken"
  ]
}
```
### Adding new chain icon
1. Add new `svg` icon files to `src/assets` folder
2. Naming convention is `[chainName.replaceAll(/\s/g, '').toLowerCase()].svg`
3. Prepare a metadata file in `src/assets` folder with the same name as the icon file, but with `.json` extension:

```json
{
  "type": ["chain"],
  "chainName": "Ethereum",
  "chainId": 1
}
```
### Adding new wallet icon
1. Add new `svg` icon files to `src/assets` folder
2. Naming convention is `[walletName.replaceAll(/\s/g, '').toLowerCase()].svg`
3. Prepare a metadata file in `src/assets` folder with the same name as the icon file, but with `.json` extension:

```json
{
  "type": ["wallet"],
  "walletName": "MetaMask",
  "identityFlag": "isMetaMask"
}
```
### Adding new combine asset and chain icon
1. Add new `svg` icon files to `src/assets` folder
2. Naming convention is `[symbol]_mono.svg` and `[symbol]_full.svg`
3. Prepare a metadata file in `src/assets` folder with the same name as the icon file, but with `.json` extension:
```json
{
  "type": ["asset", "chain"],
  "chainId": 42161,
  "name": "Arbitrum",
  "symbol": "arb",
  "symbolAliases": [
    "ARB"
  ],
  "variations": [
    "aToken",
    "stataToken"
  ]
}
```
### Adding new combine asset and wallet icon
1. Add new `svg` icon files to `src/assets` folder
2. Naming convention is `[symbol]_mono.svg` and `[symbol]_full.svg`
3. Prepare a metadata file in `src/assets` folder with the same name as the icon file, but with `.json` extension:
```json
{
  "type": ["asset", "wallet"],
  "name": "One inch Network",
  "walletName": "1inch Wallet",
  "identityFlag": "isOneInchIOSWallet",
  "symbol": "1inch",
  "symbolAliases": [
    "1INCH"
  ],
  "variations": [
    "aToken",
    "stataToken"
  ]
}
```
### Adding new combine asset chain and wallet icon
1. Add new `svg` icon files to `src/assets` folder
2. Naming convention is `[symbol]_mono.svg` and `[symbol]_full.svg`
3. Prepare a metadata file in `src/assets` folder with the same name as the icon file, but with `.json` extension:
```json
{
  "type": ["asset", "chain", "wallet"],
  "chainName": "BNB Smart Chain",
  "chainId": 56,
  "name": "Wrapped BNB",
  "walletName": "Binance Smart Wallet",
  "identityFlag": "bbcSignTx",
  "symbol": "wbnb",
  "symbolAliases": [
    "WBNB"
  ],
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

### Running docs project

To run docs website locally:
```bash
pnpm --filter docs dev
```

## Copyright
2024 BGD Labs