// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAwone } from "../../../icons/full/build/icon-awone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AwoneIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAwone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwoneIcon.displayName = 'AwoneIcon';
}

export default AwoneIcon;