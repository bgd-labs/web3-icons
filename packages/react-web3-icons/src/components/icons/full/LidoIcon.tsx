// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLido } from "../../../icons/full/build/icon-lido.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const LidoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconLido.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LidoIcon.displayName = 'LidoIcon';
}

export default LidoIcon;