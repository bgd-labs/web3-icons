// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataldo } from "../../../icons/mono/build/icon-stataldo.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataldoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataldo.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataldoIcon.displayName = 'StataldoIcon';
}

export default StataldoIcon;