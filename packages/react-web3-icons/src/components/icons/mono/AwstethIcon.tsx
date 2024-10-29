// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwsteth } from "../../../icons/mono/build/icon-awsteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwstethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwsteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwstethIcon.displayName = 'AwstethIcon';
}

export default AwstethIcon;