// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconRep } from "../../../icons/mono/build/icon-rep.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const RepIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconRep.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RepIcon.displayName = 'RepIcon';
}

export default RepIcon;