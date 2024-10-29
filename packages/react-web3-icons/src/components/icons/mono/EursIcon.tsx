// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEurs } from "../../../icons/mono/build/icon-eurs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const EursIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconEurs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EursIcon.displayName = 'EursIcon';
}

export default EursIcon;