// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasteur } from "../../../icons/mono/build/icon-statasteur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatasteurIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatasteur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasteurIcon.displayName = 'StatasteurIcon';
}

export default StatasteurIcon;