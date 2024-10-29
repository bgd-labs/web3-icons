// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAtribe } from "../../../icons/full/build/icon-atribe.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AtribeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAtribe.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AtribeIcon.displayName = 'AtribeIcon';
}

export default AtribeIcon;