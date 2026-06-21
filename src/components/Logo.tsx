import Image from "next/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className = "h-9 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Iwhuruohna First Movement crest"
      width={50}
      height={40}
      className={className}
      priority={priority}
    />
  );
}
