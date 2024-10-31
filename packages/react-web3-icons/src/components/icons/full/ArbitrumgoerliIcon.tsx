// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArbitrumgoerli } from "../../../icons/full/build/icon-arbitrumgoerli.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ArbitrumgoerliIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconArbitrumgoerli.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArbitrumgoerliIcon.displayName = 'ArbitrumgoerliIcon';
}

export default ArbitrumgoerliIcon;