// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAuni } from "../../../icons/full/build/icon-auni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AuniIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAuni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AuniIcon.displayName = 'AuniIcon';
}

export default AuniIcon;