// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataghst } from "../../../icons/mono/build/icon-stataghst.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataghstIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataghst.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataghstIcon.displayName = 'StataghstIcon';
}

export default StataghstIcon;