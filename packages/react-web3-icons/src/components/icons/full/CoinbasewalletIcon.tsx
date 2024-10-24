// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconCoinbasewallet } from "../../../icons/full/build/icon-coinbasewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const CoinbasewalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconCoinbasewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CoinbasewalletIcon.displayName = 'CoinbasewalletIcon';
}

export default CoinbasewalletIcon;