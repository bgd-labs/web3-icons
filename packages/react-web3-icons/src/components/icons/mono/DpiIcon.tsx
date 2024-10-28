// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconDpi } from "../../../icons/mono/build/icon-dpi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const DpiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconDpi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  DpiIcon.displayName = 'DpiIcon';
}

export default DpiIcon;