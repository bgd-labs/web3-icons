import loadable from "@loadable/component";

import { Web3IconType } from "../../icons/full";
import { IconComponentBaseProps, normalizeIconName } from "../../utils";

export type LoadableIconProps = IconComponentBaseProps & {
  iconKey: Web3IconType | string;
};

export const LoadableIconV2 = loadable(
  ({ iconKey, mono }: LoadableIconProps) => {
    const mode = mono ? "mono" : "full";
    const normalizedIconName = normalizeIconName(iconKey);
    return import(`../icons/${mode}/${normalizedIconName}Icon.tsx`);
  },
  {
    ssr: true,
    cacheKey: (props) => props.iconKey,
  },
);
