// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWavax } from "../../../icons/mono/build/icon-wavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WavaxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WavaxIcon.displayName = 'WavaxIcon';
}

export default WavaxIcon;