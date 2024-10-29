// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGnosis } from "../../../icons/mono/build/icon-gnosis.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const GnosisIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconGnosis.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GnosisIcon.displayName = 'GnosisIcon';
}

export default GnosisIcon;