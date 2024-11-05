import loadable from "@loadable/component";
import React, { JSX } from "react";

import { Web3IconType } from "../../icons/full";
import { IconComponentBaseProps, symbolToComponentName } from "../../utils";
import { omit } from "../../utils/omit";
import { IconPlaceholder } from "../Base/IconPlaceholder";

export type LoadableIconProps = Omit<IconComponentBaseProps, "loader"> & {
  iconKey: Web3IconType | string;
  abbreviation: string;
  fallback: Pick<IconComponentBaseProps, "loader">;
  fallbackComponent?: JSX.Element;
};

export const LoadableIcon = loadable(
  async ({
    iconKey,
    mono,
    abbreviation,
    fallbackComponent,
    ...props
  }: LoadableIconProps) => {
    const mode = mono ? "mono" : "full";
    const componentName = symbolToComponentName(iconKey);
    try {
      const iconEsModule = await import(`../icons/${mode}/${componentName}`);
      const IconComponent = iconEsModule.default;
      const imageComponentProps = omit(props, ["fallback"]);
      return {
        default: () => <IconComponent {...imageComponentProps} />,
      };
    } catch (err) {
      if (fallbackComponent) {
        return {
          default: () => <>{fallbackComponent}</>,
        };
      }

      return {
        default: () => <IconPlaceholder value={abbreviation} {...props} />,
      };
    }
  },
  {
    ssr: true,
    cacheKey: ({ iconKey, mono }) => `${iconKey}-${mono}`,
  },
);
