// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAxsushi } from "../../../icons/full/build/icon-axsushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AxsushiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAxsushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AxsushiIcon.displayName = 'AxsushiIcon';
}

export default AxsushiIcon;