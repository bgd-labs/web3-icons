// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconOp } from "../../../icons/mono/build/icon-op.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const OpIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconOp.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OpIcon.displayName = 'OpIcon';
}

export default OpIcon;