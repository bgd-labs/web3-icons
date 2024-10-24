// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconUsds } from "../../../icons/full/build/icon-usds.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const UsdsIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconUsds.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdsIcon.displayName = 'UsdsIcon';
}

export default UsdsIcon;