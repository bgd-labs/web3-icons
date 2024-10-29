// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasteth } from "../../../icons/mono/build/icon-statasteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatastethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatasteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastethIcon.displayName = 'StatastethIcon';
}

export default StatastethIcon;