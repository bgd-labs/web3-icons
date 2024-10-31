// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawbtc } from "../../../icons/full/build/icon-statawbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatawbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatawbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawbtcIcon.displayName = 'StatawbtcIcon';
}

export default StatawbtcIcon;