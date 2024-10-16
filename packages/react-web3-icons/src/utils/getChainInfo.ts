import { githubIconsPath } from "../constants";
import { chainsNames } from "../helpers";
import { IconComponentProps, IconVariant } from "./types";

export const getChainName = (chainId: number) => {
  return chainsNames[chainId] ?? "Unknown";
};
export const getChainIconNameAndPath = ({
  chainId,
  mono,
}: Pick<IconComponentProps, "chainId" | "mono">) => {
  const chainName = getChainName(chainId ?? -1);
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${mono ? IconVariant.Mono : IconVariant.Full}/${chainName.replace(/\s/g, "").toLowerCase()}.svg`,
    iconKey: chainName.replace(/\s/g, "").toLowerCase(),
  };
};
