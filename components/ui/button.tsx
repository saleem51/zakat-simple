import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 text-white shadow-sm hover:bg-brand-700 active:bg-brand-800 active:scale-[0.985] active:shadow-none",
        secondary:
          "bg-white border border-neutral-200 text-neutral-700 shadow-xs hover:bg-neutral-50 hover:border-neutral-300 active:bg-neutral-100 active:scale-[0.985]",
        ghost:
          "bg-transparent text-brand-600 hover:text-brand-700 hover:underline underline-offset-4",
        destructive:
          "bg-error-50 text-error-700 border border-error-200 hover:bg-error-100",
      },
      size: {
        default: "h-[52px] px-7 text-[15px] rounded-[12px]",
        sm: "h-9 px-4 text-[14px] rounded-[8px]",
        icon: "h-9 w-9 rounded-[8px]",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
