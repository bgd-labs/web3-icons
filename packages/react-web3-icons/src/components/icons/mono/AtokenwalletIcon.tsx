// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAtokenwallet } from "../../../icons/mono/build/icon-atokenwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AtokenwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAtokenwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AtokenwalletIcon.displayName = 'AtokenwalletIcon';
}

export default AtokenwalletIcon;