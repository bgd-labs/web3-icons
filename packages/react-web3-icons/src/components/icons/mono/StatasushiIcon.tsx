// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasushi } from "../../../icons/mono/build/icon-statasushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatasushiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatasushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasushiIcon.displayName = 'StatasushiIcon';
}

export default StatasushiIcon;