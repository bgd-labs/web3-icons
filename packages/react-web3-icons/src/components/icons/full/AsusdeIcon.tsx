// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsusde } from "../../../icons/full/build/icon-asusde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsusdeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsusde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsusdeIcon.displayName = 'AsusdeIcon';
}

export default AsusdeIcon;