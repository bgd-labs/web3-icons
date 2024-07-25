const svgToTsConfig = {
  "srcFiles": ["./icons/mono/**/*.svg"],
  "outputDirectory": "./packages/react-web3-icons/src/icons/mono",
  "interfaceName": "IWeb3Icon",
  "typeName": "Web3IconType",
  "compileSources": false,
  "modelFileName": "web3-icons",
  "prefix": "icon",
  "svgoConfig": {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
            cleanupIds: false,
            collapseGroups: false,
          },
        },
      }
    ],
  },
};
module.exports = svgToTsConfig;