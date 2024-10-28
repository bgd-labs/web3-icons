// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconTusd } from "../../../icons/mono/build/icon-tusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const TusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconTusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TusdIcon.displayName = 'TusdIcon';
}

export default TusdIcon;