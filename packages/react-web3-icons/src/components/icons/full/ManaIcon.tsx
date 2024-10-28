// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMana } from "../../../icons/full/build/icon-mana.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ManaIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconMana.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ManaIcon.displayName = 'ManaIcon';
}

export default ManaIcon;