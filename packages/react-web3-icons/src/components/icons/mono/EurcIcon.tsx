// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEurc } from "../../../icons/mono/build/icon-eurc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const EurcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconEurc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EurcIcon.displayName = 'EurcIcon';
}

export default EurcIcon;