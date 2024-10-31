// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGuni } from "../../../icons/mono/build/icon-guni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const GuniIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconGuni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GuniIcon.displayName = 'GuniIcon';
}

export default GuniIcon;