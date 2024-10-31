// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSushi } from "../../../icons/mono/build/icon-sushi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SushiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSushi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SushiIcon.displayName = 'SushiIcon';
}

export default SushiIcon;