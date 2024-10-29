// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArbitrum } from "../../../icons/mono/build/icon-arbitrum.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ArbitrumIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconArbitrum.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArbitrumIcon.displayName = 'ArbitrumIcon';
}

export default ArbitrumIcon;