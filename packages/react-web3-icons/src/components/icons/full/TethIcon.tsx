// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconTeth } from "../../../icons/full/build/icon-teth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const TethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconTeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TethIcon.displayName = 'TethIcon';
}

export default TethIcon;