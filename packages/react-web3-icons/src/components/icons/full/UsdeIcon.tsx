// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUsde } from "../../../icons/full/build/icon-usde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const UsdeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconUsde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdeIcon.displayName = 'UsdeIcon';
}

export default UsdeIcon;