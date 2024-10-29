// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatalink } from "../../../icons/mono/build/icon-statalink.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatalinkIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatalink.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatalinkIcon.displayName = 'StatalinkIcon';
}

export default StatalinkIcon;