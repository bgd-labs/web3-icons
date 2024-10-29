// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEure } from "../../../icons/full/build/icon-eure.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EureIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEure.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EureIcon.displayName = 'EureIcon';
}

export default EureIcon;