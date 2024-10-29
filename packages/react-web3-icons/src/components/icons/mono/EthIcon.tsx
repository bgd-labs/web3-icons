// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEth } from "../../../icons/mono/build/icon-eth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EthIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EthIcon.displayName = 'EthIcon';
}

export default EthIcon;