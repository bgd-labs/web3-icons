# Web3 icons library
**🚧 Work in progress 🚧**

### Adding new icons
1. Add new `svg` icon files to `src/assets/icons` folder
2. Naming convention is `[symbol]_mono.svg` and `[symbol]_full.svg`
3. Prepare a metadata file in `src/assets/icons` folder with the same name as the icon file, but with `.json` extension:

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

### Running docs project

To run docs website locally:
```bash
pnpm --filter docs dev
```

