// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAknc } from "../../../icons/full/build/icon-aknc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AkncIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAknc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AkncIcon.displayName = 'AkncIcon';
}

export default AkncIcon;