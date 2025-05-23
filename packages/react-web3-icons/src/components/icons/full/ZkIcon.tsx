// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconZk } from "../../../icons/full/build/icon-zk.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ZkIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconZk.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ZkIcon.displayName = 'ZkIcon';
}

export default ZkIcon;