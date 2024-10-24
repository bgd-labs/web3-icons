// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAusdbc } from "../../../icons/full/build/icon-ausdbc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AusdbcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAusdbc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdbcIcon.displayName = 'AusdbcIcon';
}

export default AusdbcIcon;