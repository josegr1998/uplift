const VALID_STATUSES = [
  "Planned",
  "Completed",
  "In Progress",
  "Pending",
] as const;

type ValidStatus = (typeof VALID_STATUSES)[number];

const isValidStatus = (status: string): status is ValidStatus =>
  VALID_STATUSES.includes(status as ValidStatus);

export const getStatusColor = (status: string) => {
  if (!isValidStatus(status)) {
    return "bg-gray-100 text-gray-800";
  }

  const STATUS_COLORS = {
    Planned: "bg-blue-100 text-blue-800",
    Completed: "bg-green-100 text-green-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    Pending: "bg-gray-100 text-gray-800",
  };

  return STATUS_COLORS[status];
};
