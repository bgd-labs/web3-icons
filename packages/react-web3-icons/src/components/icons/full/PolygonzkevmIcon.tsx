// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconPolygonzkevm } from "../../../icons/full/build/icon-polygonzkevm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const PolygonzkevmIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconPolygonzkevm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  PolygonzkevmIcon.displayName = 'PolygonzkevmIcon';
}

export default PolygonzkevmIcon;