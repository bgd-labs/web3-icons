// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAstkaave } from "../../../icons/mono/build/icon-astkaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AstkaaveIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAstkaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstkaaveIcon.displayName = 'AstkaaveIcon';
}

export default AstkaaveIcon;