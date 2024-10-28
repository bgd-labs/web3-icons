// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAzk } from "../../../icons/mono/build/icon-azk.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AzkIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAzk.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AzkIcon.displayName = 'AzkIcon';
}

export default AzkIcon;