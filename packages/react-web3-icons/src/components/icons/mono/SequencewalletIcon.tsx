// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSequencewallet } from "../../../icons/mono/build/icon-sequencewallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SequencewalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSequencewallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SequencewalletIcon.displayName = 'SequencewalletIcon';
}

export default SequencewalletIcon;