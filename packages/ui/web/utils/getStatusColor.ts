import { isValidStatus } from "@uplift/ui/utils";

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
