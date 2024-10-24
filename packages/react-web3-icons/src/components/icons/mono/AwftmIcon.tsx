// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAwftm } from "../../../icons/mono/build/icon-awftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AwftmIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAwftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwftmIcon.displayName = 'AwftmIcon';
}

export default AwftmIcon;