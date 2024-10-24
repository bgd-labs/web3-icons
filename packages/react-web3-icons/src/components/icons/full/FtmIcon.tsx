// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconFtm } from "../../../icons/full/build/icon-ftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const FtmIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconFtm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FtmIcon.displayName = 'FtmIcon';
}

export default FtmIcon;