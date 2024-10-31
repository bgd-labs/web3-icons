// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconPolygon } from "../../../icons/full/build/icon-polygon.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const PolygonIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconPolygon.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  PolygonIcon.displayName = 'PolygonIcon';
}

export default PolygonIcon;