// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBob } from "../../../icons/mono/build/icon-bob.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BobIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBob.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BobIcon.displayName = 'BobIcon';
}

export default BobIcon;