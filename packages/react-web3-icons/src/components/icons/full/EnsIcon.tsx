// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEns } from "../../../icons/full/build/icon-ens.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const EnsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconEns.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EnsIcon.displayName = 'EnsIcon';
}

export default EnsIcon;