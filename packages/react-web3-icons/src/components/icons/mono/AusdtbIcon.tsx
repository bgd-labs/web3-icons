// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAusdtb } from "../../../icons/mono/build/icon-ausdtb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AusdtbIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAusdtb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdtbIcon.displayName = 'AusdtbIcon';
}

export default AusdtbIcon;