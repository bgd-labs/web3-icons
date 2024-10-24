// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAsd } from "../../../icons/mono/build/icon-asd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsdIcon.displayName = 'AsdIcon';
}

export default AsdIcon;