// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAeura } from "../../../icons/mono/build/icon-aeura.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AeuraIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAeura.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AeuraIcon.displayName = 'AeuraIcon';
}

export default AeuraIcon;