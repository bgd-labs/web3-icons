// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAstmatic } from "../../../icons/mono/build/icon-astmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AstmaticIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAstmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AstmaticIcon.displayName = 'AstmaticIcon';
}

export default AstmaticIcon;