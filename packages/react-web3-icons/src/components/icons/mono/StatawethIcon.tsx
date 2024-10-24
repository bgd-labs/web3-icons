// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataweth } from "../../../icons/mono/build/icon-stataweth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataweth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawethIcon.displayName = 'StatawethIcon';
}

export default StatawethIcon;