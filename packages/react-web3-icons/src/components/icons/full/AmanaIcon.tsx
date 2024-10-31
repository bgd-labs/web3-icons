// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmana } from "../../../icons/full/build/icon-amana.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AmanaIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAmana.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmanaIcon.displayName = 'AmanaIcon';
}

export default AmanaIcon;