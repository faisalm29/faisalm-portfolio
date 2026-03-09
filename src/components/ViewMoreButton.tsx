import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

interface Props extends Omit<ComponentProps<"a">, "href"> {
  href: string;
  children: React.ReactNode;
}

const ViewMoreButton = ({
  children,
  href,
  target = "_self",
  className,
  ...props
}: Props) => {
  return (
    <a
      {...props}
      href={href}
      target={target}
      className={cn(
        "border-border group block h-20 rounded-md border border-dashed p-3",
        className,
      )}
    >
      <div className="bg-muted/50 text-muted-foreground group-hover:text-foreground group-hover:bg-muted flex h-full items-center justify-center rounded-sm transition-all duration-300 ease-in-out">
        <span>{children}</span>
        {target === "_self" ? (
          <ArrowRight
            size={16}
            className="ml-1 transition-all duration-300 ease-in-out group-hover:translate-x-1"
          />
        ) : (
          <ArrowUpRight
            size={16}
            className="ml-1 transition-all duration-300 ease-in-out group-hover:translate-x-1"
          />
        )}
      </div>
    </a>
  );
};

export { ViewMoreButton };
