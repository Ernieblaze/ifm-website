"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const MotionSlot = motion.create(Slot);

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-brand-green text-cream hover:bg-accent-green",
        accent: "bg-gold text-ink hover:bg-gold/90",
        destructive: "bg-brand-red text-cream hover:bg-brand-red/90",
        outline:
          "border border-current bg-transparent hover:bg-foreground/5",
        ghost: "bg-transparent hover:bg-foreground/5",
        link: "bg-transparent underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
        icon: "h-11 w-11 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
>;

export interface ButtonProps
  extends NativeButtonProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, children, disabled, ...props },
    ref,
  ) => {
    if (asChild) {
      return (
        <MotionSlot
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.15 }}
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </MotionSlot>
      );
    }

    return (
      <motion.button
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.15 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
