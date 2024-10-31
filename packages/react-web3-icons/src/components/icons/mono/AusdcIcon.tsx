// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAusdc } from "../../../icons/mono/build/icon-ausdc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AusdcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAusdc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdcIcon.displayName = 'AusdcIcon';
}

export default AusdcIcon;