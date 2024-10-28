// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEura } from "../../../icons/full/build/icon-eura.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EuraIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEura.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EuraIcon.displayName = 'EuraIcon';
}

export default EuraIcon;