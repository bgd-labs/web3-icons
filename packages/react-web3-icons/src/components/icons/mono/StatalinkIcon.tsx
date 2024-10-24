// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatalink } from "../../../icons/mono/build/icon-statalink.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatalinkIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatalink.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatalinkIcon.displayName = 'StatalinkIcon';
}

export default StatalinkIcon;