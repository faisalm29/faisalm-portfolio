import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<"span"> {
  children: string;
}

const HighlightedText = ({ children, className, ...props }: Props) => {
  return (
    <span {...props} className={cn("text-foreground", className)}>
      {children}
    </span>
  );
};

export { HighlightedText };
