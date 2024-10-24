// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAcrv } from "../../../icons/mono/build/icon-acrv.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AcrvIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAcrv.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcrvIcon.displayName = 'AcrvIcon';
}

export default AcrvIcon;