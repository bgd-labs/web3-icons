import React, { FC } from "react";
import InlineSVG from "react-inlinesvg";

import { IconComponentBaseProps } from "../utils";
import { generateUniqueHash } from "../utils/generateUniqueHash";

type GithubSVGIconProps = {
  githubSrc: string;
} & IconComponentBaseProps;

const GithubSvgIcon: FC<GithubSVGIconProps> = ({
  githubSrc,
  loader,
  ...props
}) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineSVG
      {...props}
      src={githubSrc}
      uniqueHash={generateUniqueHash()}
      uniquifyIDs
      loader={loader}
    />
  );
};

export default GithubSvgIcon;
