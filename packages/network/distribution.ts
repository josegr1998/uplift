import { Distribution } from "../types/distribution";

const MOCK_DATA: Distribution[] = [
  {
    id: "dst--001",
    region: "West Nile",
    date: "2025-06-15",
    status: "Planned",
    beneficiaries: 1200,
    aidType: "Food",
    deliveryChannel: "Vouchers",
  },
  {
    id: "dst--002",
    region: "Eastern Province",
    date: "2025-06-10",
    status: "Completed",
    beneficiaries: 850,
    aidType: "Medical",
    deliveryChannel: "Direct Distribution",
  },
];

export async function getDistributions(): Promise<Distribution[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_DATA), 300);
  });
}
