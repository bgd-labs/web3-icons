// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacvx } from "../../../icons/mono/build/icon-statacvx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatacvxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatacvx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacvxIcon.displayName = 'StatacvxIcon';
}

export default StatacvxIcon;