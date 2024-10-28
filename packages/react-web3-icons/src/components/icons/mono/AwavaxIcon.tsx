// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwavax } from "../../../icons/mono/build/icon-awavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AwavaxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAwavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwavaxIcon.displayName = 'AwavaxIcon';
}

export default AwavaxIcon;