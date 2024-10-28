// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAghst } from "../../../icons/mono/build/icon-aghst.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AghstIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAghst.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AghstIcon.displayName = 'AghstIcon';
}

export default AghstIcon;