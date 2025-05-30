// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwrseth } from "../../../icons/mono/build/icon-awrseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwrsethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwrseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwrsethIcon.displayName = 'AwrsethIcon';
}

export default AwrsethIcon;