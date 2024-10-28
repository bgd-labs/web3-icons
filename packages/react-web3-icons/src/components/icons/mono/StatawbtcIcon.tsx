// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawbtc } from "../../../icons/mono/build/icon-statawbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatawbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawbtcIcon.displayName = 'StatawbtcIcon';
}

export default StatawbtcIcon;