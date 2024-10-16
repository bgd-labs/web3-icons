import { githubIconsPath } from "../constants";
import { brands } from "../helpers";
import { IconComponentProps, IconVariant } from "./types";

const isAddress = (address: string): boolean => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x|0X)?[0-9a-f]{40}$/.test(address.toLowerCase())) {
    return true;
  }
  return false;
};
export const getBrandName = (key: string) => {
  if (isAddress(key)) {
    return brands[key] ?? "Unknown";
  } else {
    return (
      Object.values(brands).find(
        (item) => item.toLowerCase() === key.toLowerCase(),
      ) ?? "Unknown"
    );
  }
};
export const getBrandIconNameAndPath = ({
  brandKey,
  mono,
}: Pick<IconComponentProps, "brandKey" | "mono">) => {
  const name = getBrandName(brandKey?.toString() ?? "");
  return {
    iconPathToRepo: `${githubIconsPath}/icons/${mono ? IconVariant.Mono : IconVariant.Full}/${name.replace(/\s/g, "").toLowerCase()}.svg`,
    iconKey: name.toLowerCase(),
  };
};
