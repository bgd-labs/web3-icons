// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAsteur } from "../../../icons/mono/build/icon-asteur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsteurIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsteur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsteurIcon.displayName = 'AsteurIcon';
}

export default AsteurIcon;