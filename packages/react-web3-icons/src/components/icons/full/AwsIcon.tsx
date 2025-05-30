// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAws } from "../../../icons/full/build/icon-aws.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAws.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwsIcon.displayName = 'AwsIcon';
}

export default AwsIcon;