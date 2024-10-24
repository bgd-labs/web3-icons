// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconSusd } from "../../../icons/mono/build/icon-susd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SusdIcon.displayName = 'SusdIcon';
}

export default SusdIcon;