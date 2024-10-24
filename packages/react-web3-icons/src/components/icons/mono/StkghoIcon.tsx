// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStkgho } from "../../../icons/mono/build/icon-stkgho.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StkghoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStkgho.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkghoIcon.displayName = 'StkghoIcon';
}

export default StkghoIcon;