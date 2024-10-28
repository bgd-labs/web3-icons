// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatastmatic } from "../../../icons/mono/build/icon-statastmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatastmaticIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatastmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastmaticIcon.displayName = 'StatastmaticIcon';
}

export default StatastmaticIcon;