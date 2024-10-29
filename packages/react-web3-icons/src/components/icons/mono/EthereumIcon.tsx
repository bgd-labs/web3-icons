// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEthereum } from "../../../icons/mono/build/icon-ethereum.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EthereumIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEthereum.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EthereumIcon.displayName = 'EthereumIcon';
}

export default EthereumIcon;