// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmai } from "../../../icons/mono/build/icon-amai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AmaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAmai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmaiIcon.displayName = 'AmaiIcon';
}

export default AmaiIcon;