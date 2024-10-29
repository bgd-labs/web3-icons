// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconKnc } from "../../../icons/full/build/icon-knc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const KncIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconKnc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  KncIcon.displayName = 'KncIcon';
}

export default KncIcon;