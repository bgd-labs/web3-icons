// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatatribe } from "../../../icons/mono/build/icon-statatribe.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatatribeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatatribe.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatatribeIcon.displayName = 'StatatribeIcon';
}

export default StatatribeIcon;