// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconRenfil } from "../../../icons/full/build/icon-renfil.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const RenfilIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconRenfil.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RenfilIcon.displayName = 'RenfilIcon';
}

export default RenfilIcon;