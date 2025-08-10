import React from "react";
import { cn } from "../../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const loaderVariants = cva(
  "animate-spin rounded-full border-b-2 border-[var(--primary)]",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type Props = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof loaderVariants> & {
    className?: string;
  };

export const Loader = React.forwardRef<HTMLDivElement, Props>(
  ({ size, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex justify-center items-center", className)}
      >
        <div className={loaderVariants({ size })} />
      </div>
    );
  }
);

Loader.displayName = "Loader";
