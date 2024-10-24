// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconGnosis } from "../../../icons/mono/build/icon-gnosis.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const GnosisIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconGnosis.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GnosisIcon.displayName = 'GnosisIcon';
}

export default GnosisIcon;