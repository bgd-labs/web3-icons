import React, { FC } from "react";

import { Web3IconType } from "../../icons/full";
import { IconComponentBaseProps } from "../../utils";
import GithubSVGIcon from "../Base/GithubSVGIcon";
import { LoadableIcon } from "./LoadableIcon";

export type DynamicIconProps = IconComponentBaseProps & {
  iconKey: Web3IconType | string;
  githubSrc?: string;
  abbreviation: string;
};

/**
 * Wrapper for get icons dynamically
 */
export const DynamicIcon: FC<DynamicIconProps> = ({
  githubSrc,
  loader,
  abbreviation,
  ...props
}) => {
  return (
    <LoadableIcon
      {...props}
      abbreviation={abbreviation}
      fallback={loader}
      fallbackComponent={
        githubSrc ? (
          <GithubSVGIcon
            abbreviation={abbreviation}
            githubSrc={githubSrc}
            loader={loader}
          />
        ) : undefined
      }
    />
  );
};
