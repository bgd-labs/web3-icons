"use client";

import loadable from "@loadable/component";
import camelCase from "lodash.camelcase";
import React from "react";
import InlineSVG from "react-inlinesvg";

import { Web3IconType } from "../../icons/full";
import { capitalize, IconComponentBaseProps } from "../../utils";
import { generateUniqueHash } from "../../utils/generateUniqueHash";
import { formatMonoSvgCode, SVG } from "../SVG";

export type DynamicIconProps = IconComponentBaseProps & {
  iconKey: Web3IconType | string;
  githubSrc?: string;
};

/**
 * Wrapper for get icons dynamically
 */
export const DynamicV2Icon = loadable(
  async ({ iconKey, githubSrc, mono, loader, ...props }: DynamicIconProps) => {
    try {
      const lowerCasedIconKey = iconKey.toLowerCase();
      const iconFileName = `icon-${lowerCasedIconKey}`;
      const folder = mono ? "mono" : "full";
      const icon = await import(
        `../../icons/${folder}/build/${iconFileName}.icon.ts`
      );
      const iconData = icon[`icon${capitalize(camelCase(lowerCasedIconKey))}`];

      if (!iconData && githubSrc) {
        return {
          default: () => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            <InlineSVG
              {...props}
              src={githubSrc}
              uniqueHash={generateUniqueHash()}
              uniquifyIDs
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
