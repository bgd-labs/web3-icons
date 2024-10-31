// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconHarmonyone } from "../../../icons/mono/build/icon-harmonyone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const HarmonyoneIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconHarmonyone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  HarmonyoneIcon.displayName = 'HarmonyoneIcon';
}

export default HarmonyoneIcon;