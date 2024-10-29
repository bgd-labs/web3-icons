// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwbnb } from "../../../icons/mono/build/icon-awbnb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwbnbIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwbnb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwbnbIcon.displayName = 'AwbnbIcon';
}

export default AwbnbIcon;