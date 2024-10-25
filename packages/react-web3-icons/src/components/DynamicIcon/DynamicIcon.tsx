import React, { FC } from "react";

import { Web3IconType } from "../../icons/full";
import { IconComponentBaseProps } from "../../utils";
import GithubSVGIcon from "../Base/GithubSVGIcon";
import { LoadableIconV2 } from "./LoadableIconV2";

export type DynamicIconProps = IconComponentBaseProps & {
  iconKey: Web3IconType | string;
  githubSrc?: string;
};

/**
 * Wrapper for get icons dynamically
 */
export const DynamicIcon: FC<DynamicIconProps> = ({
  githubSrc,
  loader,
  ...props
}) => {
  return (
    <LoadableIconV2
      {...props}
      fallback={loader}
      fallbackComponent={
        githubSrc ? (
          <GithubSVGIcon githubSrc={githubSrc} loader={loader} />
        ) : undefined
      }
    />
    // <LoadableIcon
    //   {...props}
    //   fallback={loader}
    //   fallbackComponent={
    //     githubSrc ? (
    //       <GithubSVGIcon githubSrc={githubSrc} loader={loader} />
    //     ) : undefined
    //   }
    // />
  );
};
