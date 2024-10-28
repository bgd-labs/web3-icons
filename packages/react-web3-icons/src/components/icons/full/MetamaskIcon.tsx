// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMetamask } from "../../../icons/full/build/icon-metamask.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const MetamaskIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconMetamask.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MetamaskIcon.displayName = 'MetamaskIcon';
}

export default MetamaskIcon;