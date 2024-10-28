// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAguni } from "../../../icons/full/build/icon-aguni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AguniIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAguni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AguniIcon.displayName = 'AguniIcon';
}

export default AguniIcon;