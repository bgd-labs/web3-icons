// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAusd } from "../../../icons/mono/build/icon-ausd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdIcon.displayName = 'AusdIcon';
}

export default AusdIcon;