// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAgho } from "../../../icons/full/build/icon-agho.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AghoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAgho.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AghoIcon.displayName = 'AghoIcon';
}

export default AghoIcon;