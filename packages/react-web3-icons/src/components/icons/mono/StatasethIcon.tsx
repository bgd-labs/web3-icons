// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataseth } from "../../../icons/mono/build/icon-stataseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatasethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasethIcon.displayName = 'StatasethIcon';
}

export default StatasethIcon;