// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconCbeth } from "../../../icons/mono/build/icon-cbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const CbethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconCbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CbethIcon.displayName = 'CbethIcon';
}

export default CbethIcon;