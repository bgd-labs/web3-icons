// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconFantom } from "../../../icons/mono/build/icon-fantom.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const FantomIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconFantom.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FantomIcon.displayName = 'FantomIcon';
}

export default FantomIcon;