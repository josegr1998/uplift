"use client";

import { DistributionDetails as DistributionDetailServer } from "@uplift/types";
import { DistributionDetails } from "./DistributionDetails.types";
import { getStatusColor } from "../../utils/getStatusColor";
import { formatDate } from "@uplift/ui/utils";

export const mapDistributionDetails = (
  distribution: DistributionDetailServer | undefined
): DistributionDetails => {
  return {
    id: distribution?.id || "",
    region: distribution?.region || "",
    date: formatDate(distribution?.date || "") || "",
    status: distribution?.status || "",
    statusColor: getStatusColor(distribution?.status || ""),
    beneficiaries: distribution?.beneficiaries || 0,
    aidType: distribution?.aidType || "",
    deliveryChannel: distribution?.deliveryChannel || "",
    beneficiaryList: distribution?.beneficiaryList || [],
  };
};
