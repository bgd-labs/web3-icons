// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconCake } from "../../../icons/mono/build/icon-cake.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const CakeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconCake.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CakeIcon.displayName = 'CakeIcon';
}

export default CakeIcon;