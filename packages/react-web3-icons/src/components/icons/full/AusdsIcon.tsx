// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAusds } from "../../../icons/full/build/icon-ausds.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AusdsIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAusds.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdsIcon.displayName = 'AusdsIcon';
}

export default AusdsIcon;