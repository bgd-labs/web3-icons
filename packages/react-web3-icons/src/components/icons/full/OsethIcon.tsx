// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconOseth } from "../../../icons/full/build/icon-oseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const OsethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconOseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OsethIcon.displayName = 'OsethIcon';
}

export default OsethIcon;