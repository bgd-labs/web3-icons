// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFxs } from "../../../icons/mono/build/icon-fxs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const FxsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconFxs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FxsIcon.displayName = 'FxsIcon';
}

export default FxsIcon;