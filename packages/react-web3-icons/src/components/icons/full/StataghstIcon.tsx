// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataghst } from "../../../icons/full/build/icon-stataghst.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataghstIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataghst.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataghstIcon.displayName = 'StataghstIcon';
}

export default StataghstIcon;