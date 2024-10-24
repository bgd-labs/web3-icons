// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAsavax } from "../../../icons/mono/build/icon-asavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsavaxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsavaxIcon.displayName = 'AsavaxIcon';
}

export default AsavaxIcon;