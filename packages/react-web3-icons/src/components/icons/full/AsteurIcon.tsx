// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsteur } from "../../../icons/full/build/icon-asteur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AsteurIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAsteur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsteurIcon.displayName = 'AsteurIcon';
}

export default AsteurIcon;