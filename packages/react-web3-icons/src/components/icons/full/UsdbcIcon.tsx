// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconUsdbc } from "../../../icons/full/build/icon-usdbc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const UsdbcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconUsdbc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdbcIcon.displayName = 'UsdbcIcon';
}

export default UsdbcIcon;