// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconBrowserwallet } from "../../../icons/full/build/icon-browserwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BrowserwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBrowserwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BrowserwalletIcon.displayName = 'BrowserwalletIcon';
}

export default BrowserwalletIcon;