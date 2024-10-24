// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAstg } from "../../../icons/full/build/icon-astg.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AstgIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAstg.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstgIcon.displayName = 'AstgIcon';
}

export default AstgIcon;