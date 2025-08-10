import React from "react";
import { cn } from "../../utils/cn";

export type Props = {
  message?: string;
  className?: string;
};

export const Error = React.forwardRef<HTMLDivElement, Props>(
  ({ message = "An error occurred", className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-4 rounded-md bg-[var(--error)]/10 text-[var(--error)] text-sm",
          className
        )}
        role="alert"
      >
        {message}
      </div>
    );
  }
);

Error.displayName = "Error";
