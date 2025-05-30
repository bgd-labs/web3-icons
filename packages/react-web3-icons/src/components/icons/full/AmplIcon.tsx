// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmpl } from "../../../icons/full/build/icon-ampl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AmplIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAmpl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmplIcon.displayName = 'AmplIcon';
}

export default AmplIcon;