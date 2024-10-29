// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAstg } from "../../../icons/full/build/icon-astg.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AstgIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAstg.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstgIcon.displayName = 'AstgIcon';
}

export default AstgIcon;