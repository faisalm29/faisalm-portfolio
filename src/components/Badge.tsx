import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all outline-none ",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        outline:
          "border bg-background shadow-xs dark:border-input dark:bg-input/30",
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

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    children: React.ReactNode;
  };

const Badge = ({
  children,
  variant = "primary",
  size = "default",
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      {...props}
      className={cn(badgeVariants({ variant, size, className }))}
    >
      {children}
    </span>
  );
};

export { Badge };
