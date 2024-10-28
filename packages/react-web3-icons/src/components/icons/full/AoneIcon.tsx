// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAone } from "../../../icons/full/build/icon-aone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AoneIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AoneIcon.displayName = 'AoneIcon';
}

export default AoneIcon;