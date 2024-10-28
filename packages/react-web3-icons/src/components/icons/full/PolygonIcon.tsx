// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconPolygon } from "../../../icons/full/build/icon-polygon.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const PolygonIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconPolygon.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  PolygonIcon.displayName = 'PolygonIcon';
}

export default PolygonIcon;