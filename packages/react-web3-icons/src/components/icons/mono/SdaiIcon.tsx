// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconSdai } from "../../../icons/mono/build/icon-sdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SdaiIcon.displayName = 'SdaiIcon';
}

export default SdaiIcon;