// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsavax } from "../../../icons/mono/build/icon-asavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AsavaxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAsavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsavaxIcon.displayName = 'AsavaxIcon';
}

export default AsavaxIcon;