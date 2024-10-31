// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconCelo } from "../../../icons/mono/build/icon-celo.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const CeloIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconCelo.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CeloIcon.displayName = 'CeloIcon';
}

export default CeloIcon;