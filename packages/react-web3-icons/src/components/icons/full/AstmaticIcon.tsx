// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAstmatic } from "../../../icons/full/build/icon-astmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AstmaticIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAstmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstmaticIcon.displayName = 'AstmaticIcon';
}

export default AstmaticIcon;