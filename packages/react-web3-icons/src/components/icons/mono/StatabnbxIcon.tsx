// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabnbx } from "../../../icons/mono/build/icon-statabnbx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatabnbxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatabnbx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabnbxIcon.displayName = 'StatabnbxIcon';
}

export default StatabnbxIcon;