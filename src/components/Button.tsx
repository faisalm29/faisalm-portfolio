import React, { type ElementType, type ComponentPropsWithRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// 1. Define your styles
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all outline-none ",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 gap-1.5 rounded-md px-3",
        lg: "h-10 rounded-md px-6 h",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

// 2. Define the Generic Props
// T extends ElementType ensures we only pass valid HTML tags or React components
type ButtonProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
} & VariantProps<typeof buttonVariants> &
  Omit<ComponentPropsWithRef<T>, "as" | "variant">;
// We Omit to avoid collisions with our custom props

// 3. The Component
const Button = <T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps<T>) => {
  // Default to 'button' if no 'as' prop is provided
  const Component = as || "button";

  return (
    <Component
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button };
