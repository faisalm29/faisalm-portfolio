import React from "react";

export const MDXComponents = {
  img: ({ src, alt, ...props }: React.ComponentProps<"img">) => {
    const optimizedSrc = typeof src === "object" ? (src as any).src : src;
    return (
      <div className="flex justify-center">
        <img
          src={optimizedSrc}
          alt={alt ?? ""}
          className="h-auto max-w-full rounded-md"
          loading="lazy"
          style={{
            marginTop: "0",
            marginBottom: "0",
          }}
          {...props}
        />
      </div>
    );
  },
};
