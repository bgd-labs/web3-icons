// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUst } from "../../../icons/full/build/icon-ust.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const UstIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconUst.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UstIcon.displayName = 'UstIcon';
}

export default UstIcon;