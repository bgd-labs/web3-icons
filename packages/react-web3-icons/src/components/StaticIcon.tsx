"use client";

import React, { useState } from "react";

import {
  BaseIconComponentProps,
  formatMonoSvgCode,
  IconComponentBaseProps,
} from "../utils";
import GithubSVGIcon from "./Base/GithubSVGIcon";
import { SVG } from "./Base/SVG";

type StaticIconProps = IconComponentBaseProps &
  BaseIconComponentProps & {
    iconsPack: Record<string, string>;
  };

/**
 * Wrapper for get icons directly from pack
 */
export const StaticIcon = ({
  iconKey,
  iconsPack,
  githubSrc,
  mono,
  loader,
  ...props
}: StaticIconProps) => {
  const iconFormattedKey = iconKey.toLowerCase();

  const [isGithubError, setIsGithubError] = useState(false);
  const svgCode = mono
    ? iconsPack[`${iconFormattedKey}_mono`]
    : iconsPack[iconFormattedKey];

  if (!isGithubError && githubSrc && !svgCode) {
    return (
      <GithubSVGIcon
        githubSrc={githubSrc}
        loader={loader}
        onError={() => setIsGithubError(true)}
      />
    );
  }

  return (
    <SVG svgCode={formatMonoSvgCode({ mono, svgCode, ...props })} {...props} />
  );
};
