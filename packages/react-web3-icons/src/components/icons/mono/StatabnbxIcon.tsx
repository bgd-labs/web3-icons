// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabnbx } from "../../../icons/mono/build/icon-statabnbx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatabnbxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatabnbx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabnbxIcon.displayName = 'StatabnbxIcon';
}

export default StatabnbxIcon;