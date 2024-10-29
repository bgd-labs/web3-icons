// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAbat } from "../../../icons/mono/build/icon-abat.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AbatIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAbat.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbatIcon.displayName = 'AbatIcon';
}

export default AbatIcon;