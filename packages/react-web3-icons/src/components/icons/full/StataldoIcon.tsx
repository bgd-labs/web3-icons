// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataldo } from "../../../icons/full/build/icon-stataldo.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataldoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataldo.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataldoIcon.displayName = 'StataldoIcon';
}

export default StataldoIcon;