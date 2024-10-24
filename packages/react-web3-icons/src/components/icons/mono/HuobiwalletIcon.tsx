// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconHuobiwallet } from "../../../icons/mono/build/icon-huobiwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const HuobiwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconHuobiwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  HuobiwalletIcon.displayName = 'HuobiwalletIcon';
}

export default HuobiwalletIcon;