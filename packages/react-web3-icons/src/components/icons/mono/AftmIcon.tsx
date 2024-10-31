// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAftm } from "../../../icons/mono/build/icon-aftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AftmIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AftmIcon.displayName = 'AftmIcon';
}

export default AftmIcon;