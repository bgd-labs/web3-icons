// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconCelo } from "../../../icons/full/build/icon-celo.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const CeloIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconCelo.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CeloIcon.displayName = 'CeloIcon';
}

export default CeloIcon;