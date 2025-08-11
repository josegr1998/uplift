import { Beneficiary } from "@uplift/types";

export type DistributionDetails = {
  id: string;
  region: string;
  date: string;
  status: string;
  statusStyle: {
    backgroundColor: string;
    color: string;
  };
  beneficiaries: number;
  aidType: string;
  deliveryChannel: string;
  beneficiaryList: Beneficiary[];
};

export type DistributionDetailsPresentationProps = {
  distribution: DistributionDetails | null;
  isLoading: boolean;
  error: string | null;
  onBack: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
};
