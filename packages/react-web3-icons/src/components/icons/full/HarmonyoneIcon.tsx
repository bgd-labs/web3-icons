// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconHarmonyone } from "../../../icons/full/build/icon-harmonyone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const HarmonyoneIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconHarmonyone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  HarmonyoneIcon.displayName = 'HarmonyoneIcon';
}

export default HarmonyoneIcon;