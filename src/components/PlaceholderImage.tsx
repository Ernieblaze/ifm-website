import { ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label: string;
  icon?: LucideIcon;
  aspect?: "video" | "square";
  className?: string;
}

// TODO(content): swap for a real `next/image` once photography is supplied
// (see PLAN.md §12). Keeping this illustrative rather than a fake photo URL.
export function PlaceholderImage({
  label,
  icon: Icon = ImageIcon,
  aspect = "video",
  className,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-brand-green/25 bg-surface-muted",
        aspect === "video" ? "aspect-video" : "aspect-square",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--brand-green) 0, var(--brand-green) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <Icon className="h-6 w-6 text-brand-green/50" aria-hidden="true" />
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}
