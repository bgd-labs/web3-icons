// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconRabbywallet } from "../../../icons/mono/build/icon-rabbywallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const RabbywalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconRabbywallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RabbywalletIcon.displayName = 'RabbywalletIcon';
}

export default RabbywalletIcon;