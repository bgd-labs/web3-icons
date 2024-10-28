// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwftm } from "../../../icons/full/build/icon-awftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AwftmIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAwftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwftmIcon.displayName = 'AwftmIcon';
}

export default AwftmIcon;