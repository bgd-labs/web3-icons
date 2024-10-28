// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconDcentwallet } from "../../../icons/mono/build/icon-dcentwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const DcentwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconDcentwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  DcentwalletIcon.displayName = 'DcentwalletIcon';
}

export default DcentwalletIcon;