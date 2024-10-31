// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwxdai } from "../../../icons/mono/build/icon-awxdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwxdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwxdaiIcon.displayName = 'AwxdaiIcon';
}

export default AwxdaiIcon;