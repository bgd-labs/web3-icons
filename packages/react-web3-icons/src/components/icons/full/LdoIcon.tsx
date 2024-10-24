// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconLdo } from "../../../icons/full/build/icon-ldo.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const LdoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconLdo.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LdoIcon.displayName = 'LdoIcon';
}

export default LdoIcon;