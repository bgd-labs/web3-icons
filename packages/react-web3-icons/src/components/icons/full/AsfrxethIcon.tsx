// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAsfrxeth } from "../../../icons/full/build/icon-asfrxeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AsfrxethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAsfrxeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsfrxethIcon.displayName = 'AsfrxethIcon';
}

export default AsfrxethIcon;