// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsushi } from "../../../icons/full/build/icon-asushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsushiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsushiIcon.displayName = 'AsushiIcon';
}

export default AsushiIcon;