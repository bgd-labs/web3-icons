// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconSequencewallet } from "../../../icons/mono/build/icon-sequencewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SequencewalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSequencewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SequencewalletIcon.displayName = 'SequencewalletIcon';
}

export default SequencewalletIcon;