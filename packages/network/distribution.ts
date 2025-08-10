import { Distribution, DistributionDetails } from "../types/distribution";

const MOCK_DATA: Distribution[] = [
  {
    id: "dst--001",
    region: "Southern Region",
    date: "2025-06-01",
    status: "Completed",
    beneficiaries: 1000,
    aidType: "Food",
    deliveryChannel: "Direct Distribution",
  },
  {
    id: "dst--002",
    region: "Northern Region",
    date: "2025-06-05",
    status: "In Progress",
    beneficiaries: 1500,
    aidType: "Medical",
    deliveryChannel: "Mobile Distribution",
  },
  {
    id: "dst--003",
    region: "Eastern Province",
    date: "2025-06-10",
    status: "Planned",
    beneficiaries: 2000,
    aidType: "Water",
    deliveryChannel: "Vouchers",
  },
  {
    id: "dst--004",
    region: "Western Zone",
    date: "2025-06-15",
    status: "Pending",
    beneficiaries: 900,
    aidType: "Shelter",
    deliveryChannel: "Direct Distribution",
  },
  {
    id: "dst--005",
    region: "Central District",
    date: "2025-06-20",
    status: "Completed",
    beneficiaries: 1200,
    aidType: "Education",
    deliveryChannel: "Mobile Distribution",
  },
  {
    id: "dst--006",
    region: "Coastal Area",
    date: "2025-07-05",
    status: "Planned",
    beneficiaries: 1750,
    aidType: "Food",
    deliveryChannel: "Mobile Distribution",
  },
  {
    id: "dst--007",
    region: "Western Province",
    date: "2025-07-10",
    status: "In Progress",
    beneficiaries: 2500,
    aidType: "Medical",
    deliveryChannel: "Direct Distribution",
  },
  {
    id: "dst--008",
    region: "Central Region",
    date: "2025-07-15",
    status: "Completed",
    beneficiaries: 1100,
    aidType: "Water",
    deliveryChannel: "Vouchers",
  },
  {
    id: "dst--009",
    region: "Eastern Province",
    date: "2025-07-20",
    status: "Pending",
    beneficiaries: 3000,
    aidType: "Shelter",
    deliveryChannel: "Direct Distribution",
  },
  {
    id: "dst--010",
    region: "Northern District",
    date: "2025-07-25",
    status: "Planned",
    beneficiaries: 800,
    aidType: "Education",
    deliveryChannel: "Mobile Distribution",
  },
];

export async function getDistributions(): Promise<Distribution[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_DATA), 300);
  });
}

const MOCK_DISTRIBUTION_DETAILS = [
  {
    id: "dst--001",
    region: "Southern Region",
    date: "2025-06-01",
    status: "Completed",
    beneficiaries: 1000,
    aidType: "Food",
    deliveryChannel: "Direct Distribution",
    beneficiaryList: [
      {
        id: "bnf--001",
        name: "John Smith",
      },
      {
        id: "bnf--002",
        name: "Jane Doe",
      },
    ],
  },
  {
    id: "dst--002",
    region: "Northern Region",
    date: "2025-06-05",
    status: "In Progress",
    beneficiaries: 1500,
    aidType: "Medical",
    deliveryChannel: "Mobile Distribution",
    beneficiaryList: [
      {
        id: "bnf--003",
        name: "Bob Wilson",
      },
      {
        id: "bnf--004",
        name: "Mary Johnson",
      },
    ],
  },
  {
    id: "dst--003",
    region: "Eastern Province",
    date: "2025-06-10",
    status: "Planned",
    beneficiaries: 2000,
    aidType: "Water",
    deliveryChannel: "Vouchers",
    beneficiaryList: [
      {
        id: "bnf--005",
        name: "Sarah Davis",
      },
      {
        id: "bnf--006",
        name: "Michael Brown",
      },
    ],
  },
  {
    id: "dst--004",
    region: "Western Zone",
    date: "2025-06-15",
    status: "Pending",
    beneficiaries: 900,
    aidType: "Shelter",
    deliveryChannel: "Direct Distribution",
    beneficiaryList: [
      {
        id: "bnf--007",
        name: "James Wilson",
      },
      {
        id: "bnf--008",
        name: "Elizabeth Taylor",
      },
    ],
  },
  {
    id: "dst--005",
    region: "Central District",
    date: "2025-06-20",
    status: "Completed",
    beneficiaries: 1200,
    aidType: "Education",
    deliveryChannel: "Mobile Distribution",
    beneficiaryList: [
      {
        id: "bnf--009",
        name: "David Miller",
      },
      {
        id: "bnf--010",
        name: "Patricia Moore",
      },
    ],
  },
];

export const getDistributionDetails = async (
  id: string
): Promise<DistributionDetails> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          MOCK_DISTRIBUTION_DETAILS.find(
            (distribution) => distribution.id === id
          )!
        ),
      300
    );
  });
};
