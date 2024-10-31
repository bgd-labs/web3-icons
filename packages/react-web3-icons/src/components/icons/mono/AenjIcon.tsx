// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAenj } from "../../../icons/mono/build/icon-aenj.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AenjIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAenj.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AenjIcon.displayName = 'AenjIcon';
}

export default AenjIcon;