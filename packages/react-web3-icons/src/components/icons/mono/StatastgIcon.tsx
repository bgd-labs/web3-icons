// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatastg } from "../../../icons/mono/build/icon-statastg.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatastgIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatastg.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastgIcon.displayName = 'StatastgIcon';
}

export default StatastgIcon;