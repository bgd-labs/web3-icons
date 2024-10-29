// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsnx } from "../../../icons/mono/build/icon-asnx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AsnxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAsnx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsnxIcon.displayName = 'AsnxIcon';
}

export default AsnxIcon;