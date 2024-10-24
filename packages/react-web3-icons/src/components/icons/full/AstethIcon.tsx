// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAsteth } from "../../../icons/full/build/icon-asteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AstethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstethIcon.displayName = 'AstethIcon';
}

export default AstethIcon;