// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAcbeth } from "../../../icons/full/build/icon-acbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AcbethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAcbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcbethIcon.displayName = 'AcbethIcon';
}

export default AcbethIcon;