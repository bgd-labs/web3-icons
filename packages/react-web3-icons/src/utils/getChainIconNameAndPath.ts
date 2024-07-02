import { githubIconsPath } from "../constants";
import { capitalize, getChainName, IconVariant } from "./index";
import { ChainType } from "./types";
export const getChainIconNameAndPath = ({
  chainId,
  variant,
}: Pick<ChainType, "chainId"> & { variant?: IconVariant }) => {
  const chainName = getChainName({ chainId });
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${variant}/${chainName.replace(/\s/g, "").toLowerCase()}.svg`,
    iconName: `${capitalize(chainName.replace(/\s/g, "").toLowerCase())}${capitalize(variant ?? IconVariant.Full)}`,
  };
};
