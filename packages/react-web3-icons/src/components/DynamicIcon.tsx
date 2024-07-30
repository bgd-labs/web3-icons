"use client";

import loadable from "@loadable/component";
import camelCase from "lodash.camelcase";
import React from "react";
import InlineSVG from "react-inlinesvg";

import { Web3IconType } from "../icons/full";
import { capitalize, IconComponentBaseProps } from "../utils";
import { generateUniqueHash } from "../utils/generateUniqueHash";
import { SVG } from "./SVG";

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
            } else {
              const svgCode = await import(
                "../icons/full/build/icon-unknown.icon"
              );
              return {
                default: () => (
                  <SVG svgCode={svgCode.iconUnknown.data} {...props} />
                ),
              };
            }
          } else {
            return {
              default: () => <SVG svgCode={iconData.data} {...props} />,
            };
          }
        });
      } catch (e) {
        const svgCode = await import("../icons/full/build/icon-unknown.icon");
        return {
          default: () => <SVG svgCode={svgCode.iconUnknown.data} {...props} />,
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
