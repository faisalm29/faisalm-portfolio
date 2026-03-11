import { type AnchorHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const anchorLinkVariants = cva(
  "underline underline-offset-3 transition-all ease-in-out duration-300 inline-block",
  {
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
  },
);

interface CustomLinkProps
  extends
    AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof anchorLinkVariants> {
  href: string;
}

const CustomLink = ({
  href,
  variant,
  className,
  children,
  ...props
}: CustomLinkProps) => {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const externalAttributes = isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  // Error boundary for empty links
  if (!children) {
    console.warn("CustomLink component requires content (children).");
  }

  return (
    <a
      href={href}
      className={cn(anchorLinkVariants({ variant, className }))}
      {...externalAttributes}
      {...props}
    >
      {children}
    </a>
  );
};

export { CustomLink };
