import loadable from "@loadable/component";
import React, { JSX } from "react";

import { Web3IconType } from "../../icons/full";
import { IconComponentBaseProps, symbolToComponentName } from "../../utils";
import { SVG } from "../Base/SVG";

export type LoadableIconProps = IconComponentBaseProps & {
  iconKey: Web3IconType | string;
  fallbackComponent?: JSX.Element;
};

export const LoadableIcon = loadable(
  async ({ iconKey, mono, fallbackComponent, ...props }: LoadableIconProps) => {
    const mode = mono ? "mono" : "full";
    const componentName = symbolToComponentName(iconKey);
    try {
      return import(`../icons/${mode}/${componentName}`);
    } catch (err) {
      if (fallbackComponent) {
        return {
          default: () => <>{fallbackComponent}</>,
        };
      }

      return {
        default: () => <SVG svgCode={undefined} {...props} />,
      };
    }
  },
  {
    ssr: true,
    cacheKey: ({ iconKey, mono }) => `${iconKey}-${mono}`,
  },
);
