// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAgno } from "../../../icons/full/build/icon-agno.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AgnoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAgno.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AgnoIcon.displayName = 'AgnoIcon';
}

export default AgnoIcon;