// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAusdbc } from "../../../icons/full/build/icon-ausdbc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AusdbcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAusdbc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdbcIcon.displayName = 'AusdbcIcon';
}

export default AusdbcIcon;