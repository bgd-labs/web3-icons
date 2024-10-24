// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconLend } from "../../../icons/full/build/icon-lend.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const LendIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconLend.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LendIcon.displayName = 'LendIcon';
}

export default LendIcon;