import React, { ComponentProps } from "react";

import { iconUnknown } from "../icons/full/build/icon-unknown.icon";
import { Image } from "./Image";

type UnknownIconProps = ComponentProps<"img">;

export const UnknownIcon = (props: UnknownIconProps) => {
  return <Image svgCode={iconUnknown.data} {...props} />;
};
