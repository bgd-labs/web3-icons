// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEzeth } from "../../../icons/full/build/icon-ezeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EzethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEzeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EzethIcon.displayName = 'EzethIcon';
}

export default EzethIcon;