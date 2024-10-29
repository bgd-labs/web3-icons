// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAxsushi } from "../../../icons/mono/build/icon-axsushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AxsushiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAxsushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AxsushiIcon.displayName = 'AxsushiIcon';
}

export default AxsushiIcon;