"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const OPTIONS = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- avoids SSR/client theme mismatch
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-11 w-11" aria-hidden="true" />;
  }

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Sun
              className="h-[18px] w-[18px] scale-100 transition-transform duration-300 dark:scale-0"
              aria-hidden="true"
            />
            <Moon
              className="absolute h-[18px] w-[18px] scale-0 transition-transform duration-300 dark:scale-100"
              aria-hidden="true"
            />
            <span className="sr-only">Toggle theme</span>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>Theme</TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        {OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            active={theme === option.value}
            onClick={() => setTheme(option.value)}
          >
            <span className="flex items-center gap-2">
              <option.icon className="h-4 w-4" aria-hidden="true" />
              {option.label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
