// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAyfi } from "../../../icons/mono/build/icon-ayfi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AyfiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAyfi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AyfiIcon.displayName = 'AyfiIcon';
}

export default AyfiIcon;