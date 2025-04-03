// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEbtc } from "../../../icons/full/build/icon-ebtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const EbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconEbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EbtcIcon.displayName = 'EbtcIcon';
}

export default EbtcIcon;