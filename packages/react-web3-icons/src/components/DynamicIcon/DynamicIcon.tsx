import React, { FC } from "react";

import { Web3IconType } from "../../icons/full";
import { IconComponentBaseProps } from "../../utils";
import GithubSVGIcon from "../Base/GithubSVGIcon";
import { IconPlaceholderProps } from "../Base/IconPlaceholder";
import { LoadableIcon } from "./LoadableIcon";

export type DynamicIconProps = IconComponentBaseProps & {
  iconKey: Web3IconType | string;
  githubSrc?: string;
  abbreviation: string;
  fallbackProps?: Omit<IconPlaceholderProps, "value">;
};

/**
 * Wrapper for get icons dynamically
 */
export const DynamicIcon: FC<DynamicIconProps> = ({
  githubSrc,
  loader,
  abbreviation,
  iconKey,
  mono,
  ...props
}) => {
  return (
    <LoadableIcon
      {...props}
      mono={mono}
      iconKey={iconKey}
      abbreviation={abbreviation}
      fallback={loader}
      fallbackComponent={
        githubSrc ? (
          <GithubSVGIcon
            abbreviation={abbreviation}
            githubSrc={githubSrc}
            loader={loader}
            {...props}
          />
        ) : undefined
      }
    />
  );
};
