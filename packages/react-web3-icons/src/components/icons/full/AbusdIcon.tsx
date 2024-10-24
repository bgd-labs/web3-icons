// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAbusd } from "../../../icons/full/build/icon-abusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AbusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAbusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbusdIcon.displayName = 'AbusdIcon';
}

export default AbusdIcon;