// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconPolygonzkevm } from "../../../icons/mono/build/icon-polygonzkevm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const PolygonzkevmIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconPolygonzkevm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  PolygonzkevmIcon.displayName = 'PolygonzkevmIcon';
}

export default PolygonzkevmIcon;