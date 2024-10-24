// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAstkaave } from "../../../icons/full/build/icon-astkaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AstkaaveIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAstkaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstkaaveIcon.displayName = 'AstkaaveIcon';
}

export default AstkaaveIcon;