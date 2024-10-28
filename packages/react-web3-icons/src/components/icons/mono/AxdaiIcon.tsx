// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAxdai } from "../../../icons/mono/build/icon-axdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AxdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AxdaiIcon.displayName = 'AxdaiIcon';
}

export default AxdaiIcon;