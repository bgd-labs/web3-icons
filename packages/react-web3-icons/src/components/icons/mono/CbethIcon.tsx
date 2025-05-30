// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconCbeth } from "../../../icons/mono/build/icon-cbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const CbethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconCbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CbethIcon.displayName = 'CbethIcon';
}

export default CbethIcon;