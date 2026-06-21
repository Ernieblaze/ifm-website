"use client";

import type { ComponentProps } from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = ComponentProps<typeof Sonner>;

function Toaster(props: ToasterProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast rounded-xl border border-border bg-surface text-foreground shadow-lg font-sans",
          description: "text-muted-foreground",
          actionButton: "bg-brand-green text-cream",
          cancelButton: "bg-surface-muted text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
