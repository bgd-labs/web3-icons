// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAren } from "../../../icons/mono/build/icon-aren.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ArenIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAren.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArenIcon.displayName = 'ArenIcon';
}

export default ArenIcon;