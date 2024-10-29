// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatajeur } from "../../../icons/full/build/icon-statajeur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatajeurIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatajeur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatajeurIcon.displayName = 'StatajeurIcon';
}

export default StatajeurIcon;