// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArep } from "../../../icons/full/build/icon-arep.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ArepIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconArep.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArepIcon.displayName = 'ArepIcon';
}

export default ArepIcon;