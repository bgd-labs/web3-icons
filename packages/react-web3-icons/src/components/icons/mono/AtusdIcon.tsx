// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAtusd } from "../../../icons/mono/build/icon-atusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AtusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAtusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AtusdIcon.displayName = 'AtusdIcon';
}

export default AtusdIcon;