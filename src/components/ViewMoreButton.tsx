import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import type React from "react";

const viewMoreButtonVariants = cva("", {
  variants: {
    variant: {
      primary:
        "text-foreground decoration-foreground/30 hover:decoration-muted-foreground",
      secondary:
        "text-muted-foreground decoration-foreground/30 hover:decoration-muted-foreground hover:text-foreground",
      muted:
        "text-foreground/30 hover:decoration-muted-foreground hover:text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ViewMoreButtonProps
  extends ComponentProps<"a">, VariantProps<typeof viewMoreButtonVariants> {}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
  className,
  variant = "primary",
  href,
  children,
  ...props
}) => {
  return (
    <a
      {...props}
      href={href}
      className={cn(viewMoreButtonVariants({ variant, className }))}
    >
      {children}
    </a>
  );
};

export { ViewMoreButton };
