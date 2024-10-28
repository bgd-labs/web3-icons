// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGuni } from "../../../icons/full/build/icon-guni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const GuniIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconGuni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GuniIcon.displayName = 'GuniIcon';
}

export default GuniIcon;