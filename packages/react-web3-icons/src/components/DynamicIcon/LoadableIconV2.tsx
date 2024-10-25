import loadable from "@loadable/component";
import React, { JSX } from "react";

import { Web3IconType } from "../../icons/full";
import { IconComponentBaseProps, normalizeIconName } from "../../utils";
import { SVG } from "../Base/SVG";

export type LoadableIconProps = IconComponentBaseProps & {
  iconKey: Web3IconType | string;
  fallbackComponent?: JSX.Element;
};

export const LoadableIconV2 = loadable(
  async ({ iconKey, mono, fallbackComponent, ...props }: LoadableIconProps) => {
    const mode = mono ? "mono" : "full";
    const normalizedIconName = normalizeIconName(iconKey);
    try {
      return import(`../icons/${mode}/${normalizedIconName}Icon.tsx`);
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
