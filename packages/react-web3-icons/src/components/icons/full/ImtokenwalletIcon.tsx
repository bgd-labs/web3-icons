// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconImtokenwallet } from "../../../icons/full/build/icon-imtokenwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ImtokenwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconImtokenwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ImtokenwalletIcon.displayName = 'ImtokenwalletIcon';
}

export default ImtokenwalletIcon;