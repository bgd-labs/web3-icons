// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconRep } from "../../../icons/full/build/icon-rep.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const RepIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconRep.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RepIcon.displayName = 'RepIcon';
}

export default RepIcon;