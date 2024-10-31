// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAampl } from "../../../icons/full/build/icon-aampl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AamplIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAampl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AamplIcon.displayName = 'AamplIcon';
}

export default AamplIcon;