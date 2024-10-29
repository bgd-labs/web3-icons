// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAlink } from "../../../icons/mono/build/icon-alink.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AlinkIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAlink.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AlinkIcon.displayName = 'AlinkIcon';
}

export default AlinkIcon;