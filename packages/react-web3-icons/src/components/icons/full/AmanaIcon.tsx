// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAmana } from "../../../icons/full/build/icon-amana.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AmanaIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAmana.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmanaIcon.displayName = 'AmanaIcon';
}

export default AmanaIcon;