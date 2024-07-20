import { githubIconsPath } from "../constants";
import { capitalize } from "./capitalize";
import { chainsNames } from "./chainsNames";
import { ChainType, IconVariant } from "./types";
export const getChainName = ({ chainId }: Pick<ChainType, "chainId">) => {
  return chainsNames[chainId] ?? "Unknown";
};
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
