// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAgno } from "../../../icons/mono/build/icon-agno.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AgnoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAgno.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AgnoIcon.displayName = 'AgnoIcon';
}

export default AgnoIcon;