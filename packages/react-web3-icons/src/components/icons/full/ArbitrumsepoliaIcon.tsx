// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArbitrumsepolia } from "../../../icons/full/build/icon-arbitrumsepolia.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ArbitrumsepoliaIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconArbitrumsepolia.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArbitrumsepoliaIcon.displayName = 'ArbitrumsepoliaIcon';
}

export default ArbitrumsepoliaIcon;