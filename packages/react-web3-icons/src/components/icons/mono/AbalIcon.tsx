// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAbal } from "../../../icons/mono/build/icon-abal.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AbalIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAbal.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbalIcon.displayName = 'AbalIcon';
}

export default AbalIcon;