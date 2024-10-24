// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAwsteth } from "../../../icons/full/build/icon-awsteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AwstethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAwsteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwstethIcon.displayName = 'AwstethIcon';
}

export default AwstethIcon;