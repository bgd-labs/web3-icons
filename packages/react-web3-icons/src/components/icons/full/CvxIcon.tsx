// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconCvx } from "../../../icons/full/build/icon-cvx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const CvxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconCvx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CvxIcon.displayName = 'CvxIcon';
}

export default CvxIcon;