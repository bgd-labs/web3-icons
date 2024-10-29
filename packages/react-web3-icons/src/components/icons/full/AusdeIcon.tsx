// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAusde } from "../../../icons/full/build/icon-ausde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AusdeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAusde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AusdeIcon.displayName = 'AusdeIcon';
}

export default AusdeIcon;