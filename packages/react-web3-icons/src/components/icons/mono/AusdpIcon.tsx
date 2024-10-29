// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAusdp } from "../../../icons/mono/build/icon-ausdp.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AusdpIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAusdp.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdpIcon.displayName = 'AusdpIcon';
}

export default AusdpIcon;