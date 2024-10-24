// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAoseth } from "../../../icons/full/build/icon-aoseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AosethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAoseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AosethIcon.displayName = 'AosethIcon';
}

export default AosethIcon;