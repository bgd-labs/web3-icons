// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWs } from "../../../icons/full/build/icon-ws.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WsIcon.displayName = 'WsIcon';
}

export default WsIcon;