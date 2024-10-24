// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAkncl } from "../../../icons/mono/build/icon-akncl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AknclIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAkncl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AknclIcon.displayName = 'AknclIcon';
}

export default AknclIcon;