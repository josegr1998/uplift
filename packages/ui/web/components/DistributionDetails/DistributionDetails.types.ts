import { Beneficiary } from "@uplift/types";

export type DistributionDetails = {
  id: string;
  region: string;
  date: string;
  status: string;
  statusColor: string;
  beneficiaries: number;
  aidType: string;
  deliveryChannel: string;
  beneficiaryList: Beneficiary[];
};
