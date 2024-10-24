// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconOne } from "../../../icons/mono/build/icon-one.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const OneIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconOne.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OneIcon.displayName = 'OneIcon';
}

export default OneIcon;