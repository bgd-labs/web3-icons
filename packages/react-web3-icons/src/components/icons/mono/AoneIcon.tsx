// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAone } from "../../../icons/mono/build/icon-aone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AoneIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AoneIcon.displayName = 'AoneIcon';
}

export default AoneIcon;