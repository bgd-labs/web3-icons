// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAop } from "../../../icons/mono/build/icon-aop.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AopIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAop.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AopIcon.displayName = 'AopIcon';
}

export default AopIcon;