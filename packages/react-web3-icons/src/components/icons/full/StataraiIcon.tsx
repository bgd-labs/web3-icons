// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatarai } from "../../../icons/full/build/icon-statarai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataraiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatarai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataraiIcon.displayName = 'StataraiIcon';
}

export default StataraiIcon;