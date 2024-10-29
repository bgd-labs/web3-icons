// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArenfil } from "../../../icons/full/build/icon-arenfil.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ArenfilIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconArenfil.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArenfilIcon.displayName = 'ArenfilIcon';
}

export default ArenfilIcon;