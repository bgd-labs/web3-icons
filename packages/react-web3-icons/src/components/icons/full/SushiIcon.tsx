// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconSushi } from "../../../icons/full/build/icon-sushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SushiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SushiIcon.displayName = 'SushiIcon';
}

export default SushiIcon;