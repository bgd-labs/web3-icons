// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconJeur } from "../../../icons/full/build/icon-jeur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const JeurIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconJeur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  JeurIcon.displayName = 'JeurIcon';
}

export default JeurIcon;