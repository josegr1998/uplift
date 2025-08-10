export const VALID_STATUSES = [
  "Planned",
  "Completed",
  "In Progress",
  "Pending",
] as const;

export type ValidStatus = (typeof VALID_STATUSES)[number];

export const isValidStatus = (status: string): status is ValidStatus =>
  VALID_STATUSES.includes(status as ValidStatus);
