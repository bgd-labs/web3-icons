// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAcvx } from "../../../icons/full/build/icon-acvx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AcvxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAcvx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcvxIcon.displayName = 'AcvxIcon';
}

export default AcvxIcon;