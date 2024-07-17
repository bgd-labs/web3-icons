import { githubIconsPath } from "../constants";
import { getChainName, IconVariant } from "./index";
import { ChainType } from "./types";
export const getChainIconPath = ({
  chainId,
  variant,
}: Pick<ChainType, "chainId"> & { variant?: IconVariant }) => {
  const chainName = getChainName({ chainId });
  return `${githubIconsPath}/icons/${variant}/${chainName.replace(/\s/g, "").toLowerCase()}.svg`;
};
