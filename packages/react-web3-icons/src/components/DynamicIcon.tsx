"use client";

import loadable from "@loadable/component";
import camelCase from "lodash.camelcase";
import React from "react";
import SVG from "react-inlinesvg";

import { Web3IconType } from "../icons/full";
import { capitalize, IconComponentBaseProps } from "../utils";

/**
 * Wrapper for get icons dynamically
 */
export const DynamicIcon = ({
  iconKey,
  githubSrc,
  mono,
  loader,
  ...props
}: {
  iconKey: Web3IconType | string;
  githubSrc?: string;
} & IconComponentBaseProps) => {
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
            icon[`icon${capitalize(camelCase(iconKey.toLowerCase()))}`];
          if (!iconData && githubSrc) {
            if (!isError) {
              return {
                default: () => (
                  <SVG
                    {...props}
                    src={githubSrc}
                    uniqueHash={(Math.random() + 1).toString(36).substring(7)}
                    uniquifyIDs
                    onError={() => setIsError(true)}
                    loader={loader}
                  />
                ),
              };
            } else {
              const svgCode = await import(
                "../icons/full/build/icon-unknown.icon"
              );
              return {
                default: () => (
                  <SVG
                    {...props}
                    src={svgCode.iconUnknown.data}
                    uniqueHash={(Math.random() + 1).toString(36).substring(7)}
                    uniquifyIDs
                    loader={loader}
                  />
                ),
              };
            }
          } else {
            return {
              default: () => (
                <SVG
                  {...props}
                  src={iconData.data}
                  uniqueHash={(Math.random() + 1).toString(36).substring(7)}
                  uniquifyIDs
                  loader={loader}
                />
              ),
            };
          }
        });
      } catch (e) {
        const svgCode = await import("../icons/full/build/icon-unknown.icon");
        return {
          default: () => (
            <SVG
              {...props}
              src={svgCode.iconUnknown.data}
              uniqueHash={(Math.random() + 1).toString(36).substring(7)}
              uniquifyIDs
              loader={loader}
            />
          ),
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
