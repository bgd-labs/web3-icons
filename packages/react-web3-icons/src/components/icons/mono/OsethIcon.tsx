// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconOseth } from "../../../icons/mono/build/icon-oseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const OsethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconOseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OsethIcon.displayName = 'OsethIcon';
}

export default OsethIcon;