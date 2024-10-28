// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAlink } from "../../../icons/full/build/icon-alink.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AlinkIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAlink.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AlinkIcon.displayName = 'AlinkIcon';
}

export default AlinkIcon;