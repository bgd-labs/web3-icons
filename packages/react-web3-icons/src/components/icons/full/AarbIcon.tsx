// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAarb } from "../../../icons/full/build/icon-aarb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AarbIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAarb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AarbIcon.displayName = 'AarbIcon';
}

export default AarbIcon;