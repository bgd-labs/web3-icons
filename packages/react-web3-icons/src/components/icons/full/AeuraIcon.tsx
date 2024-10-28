// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAeura } from "../../../icons/full/build/icon-aeura.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AeuraIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAeura.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AeuraIcon.displayName = 'AeuraIcon';
}

export default AeuraIcon;