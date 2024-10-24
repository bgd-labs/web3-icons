// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAenj } from "../../../icons/mono/build/icon-aenj.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AenjIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAenj.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AenjIcon.displayName = 'AenjIcon';
}

export default AenjIcon;