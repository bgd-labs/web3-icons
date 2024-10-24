// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconEthx } from "../../../icons/mono/build/icon-ethx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EthxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEthx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EthxIcon.displayName = 'EthxIcon';
}

export default EthxIcon;