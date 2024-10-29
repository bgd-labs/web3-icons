// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmai } from "../../../icons/full/build/icon-amai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AmaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAmai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmaiIcon.displayName = 'AmaiIcon';
}

export default AmaiIcon;