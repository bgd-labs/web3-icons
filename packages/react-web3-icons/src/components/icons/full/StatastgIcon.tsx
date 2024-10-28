// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatastg } from "../../../icons/full/build/icon-statastg.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatastgIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatastg.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastgIcon.displayName = 'StatastgIcon';
}

export default StatastgIcon;