import Link from "next/link";
import { Globe, Camera, Play } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Logo } from "@/components/Logo";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/history", label: "Our History" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook", icon: Globe },
  { href: "#", label: "Instagram", icon: Camera },
  { href: "#", label: "YouTube", icon: Play },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-gold/40 bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-auto shrink-0" />
              <span className="font-heading text-lg font-semibold leading-tight tracking-tight text-foreground">
                <span className="no-break">Iwhuruohna</span> First Movement
              </span>
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold">
              Unity, Loyalty, Duty
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              A nationalist movement protecting the Iwhuruohna woman, man,
              and child, headquartered in Port Harcourt, Rivers State.
            </p>

            <ul className="mt-5 flex gap-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={social.href}
                        aria-label={social.label}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-green hover:text-brand-green active:scale-90"
                      >
                        <social.icon className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{social.label}</TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Navigate</p>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Iwhuruohna First Movement. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
