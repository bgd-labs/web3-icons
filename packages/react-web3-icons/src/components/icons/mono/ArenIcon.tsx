// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAren } from "../../../icons/mono/build/icon-aren.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ArenIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAren.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArenIcon.displayName = 'ArenIcon';
}

export default ArenIcon;