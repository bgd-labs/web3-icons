// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEura } from "../../../icons/full/build/icon-eura.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const EuraIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconEura.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EuraIcon.displayName = 'EuraIcon';
}

export default EuraIcon;