// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconZksyncera } from "../../../icons/mono/build/icon-zksyncera.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ZksynceraIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconZksyncera.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ZksynceraIcon.displayName = 'ZksynceraIcon';
}

export default ZksynceraIcon;