// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAbusd } from "../../../icons/full/build/icon-abusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AbusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAbusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbusdIcon.displayName = 'AbusdIcon';
}

export default AbusdIcon;