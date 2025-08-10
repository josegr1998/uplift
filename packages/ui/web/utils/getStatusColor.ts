import { isValidStatus } from "@uplift/ui/utils";

export const getStatusColor = (status: string) => {
  if (!isValidStatus(status)) {
    return "bg-[var(--neutral)]/10 text-[var(--neutral)]";
  }

  const STATUS_COLORS = {
    Planned: "bg-[var(--primary)]/10 text-[var(--primary)]",
    Completed: "bg-[var(--success)]/10 text-[var(--success)]",
    "In Progress": "bg-[var(--warning)]/10 text-[var(--warning)]",
    Pending: "bg-[var(--neutral)]/10 text-[var(--neutral)]",
  };

  return STATUS_COLORS[status];
};
