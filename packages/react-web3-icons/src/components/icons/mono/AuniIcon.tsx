// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAuni } from "../../../icons/mono/build/icon-auni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AuniIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAuni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AuniIcon.displayName = 'AuniIcon';
}

export default AuniIcon;