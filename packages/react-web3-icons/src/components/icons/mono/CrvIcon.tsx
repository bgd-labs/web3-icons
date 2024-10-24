// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconCrv } from "../../../icons/mono/build/icon-crv.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const CrvIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconCrv.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CrvIcon.displayName = 'CrvIcon';
}

export default CrvIcon;