// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAyfi } from "../../../icons/mono/build/icon-ayfi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AyfiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAyfi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AyfiIcon.displayName = 'AyfiIcon';
}

export default AyfiIcon;