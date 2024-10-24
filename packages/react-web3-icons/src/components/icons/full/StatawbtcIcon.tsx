// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawbtc } from "../../../icons/full/build/icon-statawbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatawbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatawbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawbtcIcon.displayName = 'StatawbtcIcon';
}

export default StatawbtcIcon;