// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconArenfil } from "../../../icons/full/build/icon-arenfil.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ArenfilIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconArenfil.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArenfilIcon.displayName = 'ArenfilIcon';
}

export default ArenfilIcon;