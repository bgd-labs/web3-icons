// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconZksyncera } from "../../../icons/full/build/icon-zksyncera.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ZksynceraIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconZksyncera.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ZksynceraIcon.displayName = 'ZksynceraIcon';
}

export default ZksynceraIcon;