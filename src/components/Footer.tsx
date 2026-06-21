import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/history", label: "Our History" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight text-neutral-900">
              Iwhuruohna First Movement
            </p>
            <p className="mt-2 max-w-sm text-sm text-neutral-600">
              A digital home for the Iwhuruohna (Ikwerre) people — uniting,
              preserving, and amplifying our identity.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <p className="text-sm font-semibold text-neutral-900">Navigate</p>
              <ul className="mt-3 space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 transition hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-neutral-900">Follow</p>
              <ul className="mt-3 space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 transition hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Iwhuruohna First Movement. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
