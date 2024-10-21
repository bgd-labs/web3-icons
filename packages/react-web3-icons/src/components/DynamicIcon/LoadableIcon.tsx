import loadable from "@loadable/component";
import camelCase from "lodash.camelcase";
import React, { JSX } from "react";

import { Web3IconType } from "../../icons/full";
import { capitalize, IconComponentBaseProps } from "../../utils";
import { formatMonoSvgCode, SVG } from "../SVG";

export type LoadableIconProps = IconComponentBaseProps & {
  iconKey: Web3IconType | string;
  fallbackComponent?: JSX.Element;
};

export const LoadableIcon = loadable(
  async ({
    iconKey,
    mono,
    loader,
    fallbackComponent,
    ...props
  }: LoadableIconProps) => {
    try {
      const lowerCasedIconKey = iconKey.toLowerCase();
      const iconFileName = `icon-${lowerCasedIconKey}`;
      const folder = mono ? "mono" : "full";
      const icon = await import(
        `../../icons/${folder}/build/${iconFileName}.icon.ts`
      );
      const iconData = icon[`icon${capitalize(camelCase(lowerCasedIconKey))}`];

      if (!iconData && fallbackComponent) {
        return {
          default: () => <>{fallbackComponent}</>,
        };
      }

      return {
        default: () => (
          <SVG
            svgCode={formatMonoSvgCode({
              mono,
              svgCode: iconData?.data,
              ...props,
            })}
            loader={loader}
            {...props}
          />
        ),
      };
    } catch (e) {
      return {
        default: () => <SVG svgCode={undefined} loader={loader} {...props} />,
      };
    }
  },
  {
    ssr: true,
    cacheKey: (props) => props.iconKey,
  },
);
