// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausdbc } from "../../../icons/full/build/icon-statausdbc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatausdbcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatausdbc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdbcIcon.displayName = 'StatausdbcIcon';
}

export default StatausdbcIcon;