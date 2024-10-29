// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEnj } from "../../../icons/mono/build/icon-enj.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const EnjIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconEnj.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EnjIcon.displayName = 'EnjIcon';
}

export default EnjIcon;