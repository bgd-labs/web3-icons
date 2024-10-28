// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconOkxwallet } from "../../../icons/mono/build/icon-okxwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const OkxwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconOkxwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OkxwalletIcon.displayName = 'OkxwalletIcon';
}

export default OkxwalletIcon;