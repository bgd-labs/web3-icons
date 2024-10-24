// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconArbitrumgoerli } from "../../../icons/mono/build/icon-arbitrumgoerli.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ArbitrumgoerliIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconArbitrumgoerli.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArbitrumgoerliIcon.displayName = 'ArbitrumgoerliIcon';
}

export default ArbitrumgoerliIcon;