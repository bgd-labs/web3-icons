// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAmai } from "../../../icons/full/build/icon-amai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AmaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAmai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmaiIcon.displayName = 'AmaiIcon';
}

export default AmaiIcon;