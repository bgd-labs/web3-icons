// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAens } from "../../../icons/mono/build/icon-aens.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AensIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAens.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AensIcon.displayName = 'AensIcon';
}

export default AensIcon;