// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAvalanchetestnet } from "../../../icons/full/build/icon-avalanchetestnet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AvalanchetestnetIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAvalanchetestnet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AvalanchetestnetIcon.displayName = 'AvalanchetestnetIcon';
}

export default AvalanchetestnetIcon;