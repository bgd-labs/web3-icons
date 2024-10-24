// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAusde } from "../../../icons/full/build/icon-ausde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AusdeIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAusde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdeIcon.displayName = 'AusdeIcon';
}

export default AusdeIcon;