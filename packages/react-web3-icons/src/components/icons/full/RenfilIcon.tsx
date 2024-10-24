// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconRenfil } from "../../../icons/full/build/icon-renfil.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const RenfilIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconRenfil.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RenfilIcon.displayName = 'RenfilIcon';
}

export default RenfilIcon;