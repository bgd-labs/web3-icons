// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAscr } from "../../../icons/mono/build/icon-ascr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AscrIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAscr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AscrIcon.displayName = 'AscrIcon';
}

export default AscrIcon;