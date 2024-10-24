// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawftm } from "../../../icons/mono/build/icon-statawftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawftmIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatawftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawftmIcon.displayName = 'StatawftmIcon';
}

export default StatawftmIcon;