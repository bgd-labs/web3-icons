// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconArbitrum } from "../../../icons/full/build/icon-arbitrum.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ArbitrumIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconArbitrum.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArbitrumIcon.displayName = 'ArbitrumIcon';
}

export default ArbitrumIcon;