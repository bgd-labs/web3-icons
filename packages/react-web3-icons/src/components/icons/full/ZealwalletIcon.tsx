// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconZealwallet } from "../../../icons/full/build/icon-zealwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ZealwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconZealwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ZealwalletIcon.displayName = 'ZealwalletIcon';
}

export default ZealwalletIcon;