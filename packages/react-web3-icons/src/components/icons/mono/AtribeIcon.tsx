// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAtribe } from "../../../icons/mono/build/icon-atribe.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AtribeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAtribe.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AtribeIcon.displayName = 'AtribeIcon';
}

export default AtribeIcon;