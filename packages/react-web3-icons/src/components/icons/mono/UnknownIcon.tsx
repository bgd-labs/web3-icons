// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUnknown } from "../../../icons/mono/build/icon-unknown.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const UnknownIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconUnknown.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UnknownIcon.displayName = 'UnknownIcon';
}

export default UnknownIcon;