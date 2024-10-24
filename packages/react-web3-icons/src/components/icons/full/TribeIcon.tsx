// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconTribe } from "../../../icons/full/build/icon-tribe.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const TribeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconTribe.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TribeIcon.displayName = 'TribeIcon';
}

export default TribeIcon;