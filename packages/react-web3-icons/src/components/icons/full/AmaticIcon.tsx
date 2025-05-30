// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmatic } from "../../../icons/full/build/icon-amatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AmaticIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmaticIcon.displayName = 'AmaticIcon';
}

export default AmaticIcon;