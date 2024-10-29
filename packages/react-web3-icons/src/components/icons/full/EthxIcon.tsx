// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEthx } from "../../../icons/full/build/icon-ethx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const EthxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconEthx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EthxIcon.displayName = 'EthxIcon';
}

export default EthxIcon;