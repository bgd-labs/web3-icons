// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatamana } from "../../../icons/full/build/icon-statamana.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatamanaIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatamana.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatamanaIcon.displayName = 'StatamanaIcon';
}

export default StatamanaIcon;