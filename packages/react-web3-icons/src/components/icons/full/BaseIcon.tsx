// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBase } from "../../../icons/full/build/icon-base.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BaseIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBase.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BaseIcon.displayName = 'BaseIcon';
}

export default BaseIcon;