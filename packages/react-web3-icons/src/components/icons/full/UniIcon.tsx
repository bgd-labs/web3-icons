// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUni } from "../../../icons/full/build/icon-uni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const UniIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconUni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UniIcon.displayName = 'UniIcon';
}

export default UniIcon;