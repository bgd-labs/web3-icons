// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAethx } from "../../../icons/full/build/icon-aethx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AethxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAethx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AethxIcon.displayName = 'AethxIcon';
}

export default AethxIcon;