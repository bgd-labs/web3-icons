// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAoseth } from "../../../icons/mono/build/icon-aoseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AosethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAoseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AosethIcon.displayName = 'AosethIcon';
}

export default AosethIcon;