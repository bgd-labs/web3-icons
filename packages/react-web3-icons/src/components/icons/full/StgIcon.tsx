// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStg } from "../../../icons/full/build/icon-stg.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StgIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStg.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StgIcon.displayName = 'StgIcon';
}

export default StgIcon;