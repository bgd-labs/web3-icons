// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLido } from "../../../icons/mono/build/icon-lido.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const LidoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconLido.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LidoIcon.displayName = 'LidoIcon';
}

export default LidoIcon;