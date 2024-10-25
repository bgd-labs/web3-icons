// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStataeura } from "../../../icons/mono/build/icon-stataeura.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StataeuraIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStataeura.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataeuraIcon.displayName = 'StataeuraIcon';
}

export default StataeuraIcon;