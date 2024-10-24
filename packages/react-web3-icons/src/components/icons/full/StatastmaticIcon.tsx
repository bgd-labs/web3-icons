// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatastmatic } from "../../../icons/full/build/icon-statastmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatastmaticIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatastmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastmaticIcon.displayName = 'StatastmaticIcon';
}

export default StatastmaticIcon;