"use client";

import loadable from "@loadable/component";
import camelCase from "lodash.camelcase";
import React from "react";
import InlineSVG from "react-inlinesvg";

import {
  capitalize,
  generateUniqueHash,
  getIconData,
  IconComponentBaseProps,
} from "../utils";
import { formatMonoSvgCode, SVG } from "./SVG";

/**
 * Wrapper for get icons dynamically
 */
export const DynamicIcon = ({
  iconKey,
  iconType,
  assetTag,
  formatSymbol,
  mono,
  loader,
  ...props
}: IconComponentBaseProps) => {
  const { iconKey: key, iconPathToRepo: githubSrc } = getIconData({
    iconKey,
    iconType,
    assetTag,
    formatSymbol,
    mono,
  });

  const [isError, setIsError] = React.useState(false);

  const Icon = loadable(
    async () => {
      try {
        return await (
          mono ? import("../icons/mono/index") : import("../icons/full/index")
        ).then(async (icon) => {
          const iconData =
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            icon[`icon${capitalize(camelCase(key.toLowerCase()))}`];

          if (!iconData && githubSrc && !isError) {
            return {
              default: () => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                <InlineSVG
                  {...props}
                  src={githubSrc}
                  uniqueHash={generateUniqueHash()}
                  uniquifyIDs
                  onError={() => setIsError(true)}
                  loader={loader}
                />
              ),
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
        });
      } catch (e) {
        return {
          default: () => <SVG svgCode={undefined} loader={loader} {...props} />,
        };
      }
    },
    {
      fallback: loader,
      ssr: true,
    },
  );

  return <Icon />;
};
