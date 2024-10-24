// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataeurs } from "../../../icons/mono/build/icon-stataeurs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataeursIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataeurs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataeursIcon.displayName = 'StataeursIcon';
}

export default StataeursIcon;