// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsteth } from "../../../icons/full/build/icon-asteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AstethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAsteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstethIcon.displayName = 'AstethIcon';
}

export default AstethIcon;