// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconRpl } from "../../../icons/mono/build/icon-rpl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const RplIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconRpl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RplIcon.displayName = 'RplIcon';
}

export default RplIcon;