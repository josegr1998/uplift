import { DistributionDetails } from "./DistributionDetails.types";
import { formatDate } from "@uplift/ui/utils";
import { getStatusColor } from "../../utils/getStatusColor";
import { DistributionDetails as DistributionDetailServer } from "@uplift/types";

export const mapDistributionDetails = (
  distribution: DistributionDetailServer | undefined
): DistributionDetails => {
  return {
    id: distribution?.id || "",
    region: distribution?.region || "",
    date: formatDate(distribution?.date || "") || "",
    status: distribution?.status || "",
    statusStyle: getStatusColor(distribution?.status || ""),
    beneficiaries: distribution?.beneficiaries || 0,
    aidType: distribution?.aidType || "",
    deliveryChannel: distribution?.deliveryChannel || "",
    beneficiaryList: distribution?.beneficiaryList || [],
  };
};
