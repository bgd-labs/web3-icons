// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWavax } from "../../../icons/mono/build/icon-wavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WavaxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WavaxIcon.displayName = 'WavaxIcon';
}

export default WavaxIcon;