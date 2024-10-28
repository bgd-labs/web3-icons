// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasteth } from "../../../icons/mono/build/icon-statasteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatastethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatasteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastethIcon.displayName = 'StatastethIcon';
}

export default StatastethIcon;