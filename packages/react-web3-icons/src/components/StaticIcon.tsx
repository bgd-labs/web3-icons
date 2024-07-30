"use client";

import React, { useEffect } from "react";
import InlineSVG from "react-inlinesvg";

import { iconUnknown, Web3IconType } from "../icons/full";
import { IconComponentBaseProps } from "../utils";
import { generateUniqueHash } from "../utils/generateUniqueHash";
import { SVG } from "./SVG";

/**
 * Wrapper for get icons directly from pack
 */
export const StaticIcon = ({
  iconKey,
  githubSrc,
  iconsPack,
  mono,
  loader,
  ...props
}: {
  iconKey: Web3IconType | string;
  iconsPack: Record<string, string>;
  githubSrc?: string;
} & IconComponentBaseProps) => {
  const iconFormattedKey = iconKey.toLowerCase();

  const [isGithubError, setIsGithubError] = React.useState(false);
  const [svgCode, setSvgCode] = React.useState<string | undefined>(
    mono ? iconsPack[`${iconFormattedKey}_mono`] : iconsPack[iconFormattedKey],
  );

  useEffect(() => {
    setSvgCode(
      mono
        ? iconsPack[`${iconFormattedKey}_mono`]
        : iconsPack[iconFormattedKey],
    );
  }, [mono, iconKey]);

  if (!svgCode && (isGithubError || !githubSrc)) {
    return <SVG svgCode={iconUnknown.data} {...props} />;
  }

  if (!isGithubError && githubSrc && !svgCode) {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      <InlineSVG
        {...props}
        src={githubSrc}
        uniqueHash={generateUniqueHash()}
        uniquifyIDs
        onError={() => setIsGithubError(true)}
        loader={loader}
      />
    );
  }

  return <SVG svgCode={svgCode} {...props} />;
};
