// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAeurc } from "../../../icons/mono/build/icon-aeurc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AeurcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAeurc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AeurcIcon.displayName = 'AeurcIcon';
}

export default AeurcIcon;