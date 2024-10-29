"use client";

import React, { useState } from "react";

import {
  BaseIconComponentProps,
  formatMonoSvgCode,
  IconComponentBaseProps,
} from "../utils";
import GithubSVGIcon from "./Base/GithubSVGIcon";
import { IconPlaceholder } from "./Base/IconPlaceholder";
import { Image } from "./Base/Image";

type StaticIconProps = IconComponentBaseProps &
  BaseIconComponentProps & {
    iconsPack: Record<string, string>;
    abbreviation: string;
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
  abbreviation,
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
        abbreviation={abbreviation}
        githubSrc={githubSrc}
        loader={loader}
        onError={() => setIsGithubError(true)}
      />
    );
  }

  const formattedSvgCode = formatMonoSvgCode({ mono, svgCode, ...props });

  if (!formattedSvgCode) {
    return <IconPlaceholder value={abbreviation} />;
  }

  return <Image svgCode={formattedSvgCode} {...props} />;
};
