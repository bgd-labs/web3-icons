// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwmatic } from "../../../icons/full/build/icon-awmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwmaticIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwmaticIcon.displayName = 'AwmaticIcon';
}

export default AwmaticIcon;