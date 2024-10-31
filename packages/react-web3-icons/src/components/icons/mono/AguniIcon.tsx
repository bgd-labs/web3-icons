// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAguni } from "../../../icons/mono/build/icon-aguni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AguniIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAguni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AguniIcon.displayName = 'AguniIcon';
}

export default AguniIcon;