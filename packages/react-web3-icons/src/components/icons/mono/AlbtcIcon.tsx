// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAlbtc } from "../../../icons/mono/build/icon-albtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AlbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAlbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AlbtcIcon.displayName = 'AlbtcIcon';
}

export default AlbtcIcon;