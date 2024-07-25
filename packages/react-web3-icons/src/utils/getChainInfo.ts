import { githubIconsPath } from "../constants";
import { capitalize } from "./capitalize";
import { chainsNames } from "./chainsNames";
import { ChainType, IconVariant } from "./types";
export const getChainName = ({ chainId }: Pick<ChainType, "chainId">) => {
  return chainsNames[chainId] ?? "Unknown";
};
export const getChainIconNameAndPath = ({
  chainId,
  mono,
}: Pick<ChainType, "chainId"> & { mono?: boolean }) => {
  const chainName = getChainName({ chainId });
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${mono ? IconVariant.Mono : IconVariant.Full}/${chainName.replace(/\s/g, "").toLowerCase()}.svg`,
    iconKey: `${capitalize(chainName.replace(/\s/g, "").toLowerCase())}`,
  };
};
