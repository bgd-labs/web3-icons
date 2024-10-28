// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatajeur } from "../../../icons/mono/build/icon-statajeur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatajeurIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatajeur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatajeurIcon.displayName = 'StatajeurIcon';
}

export default StatajeurIcon;