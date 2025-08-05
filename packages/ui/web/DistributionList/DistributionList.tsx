import React from "react";
import { getDistributions } from "@uplift/network";

export const DistributionList = async () => {
  const list = await getDistributions();

  return <div>{list.map((item) => item.region)}</div>;
};
