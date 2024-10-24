// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconExoduswallet } from "../../../icons/full/build/icon-exoduswallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ExoduswalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconExoduswallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ExoduswalletIcon.displayName = 'ExoduswalletIcon';
}

export default ExoduswalletIcon;