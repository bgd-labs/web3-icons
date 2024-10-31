// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAzrx } from "../../../icons/full/build/icon-azrx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AzrxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAzrx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AzrxIcon.displayName = 'AzrxIcon';
}

export default AzrxIcon;