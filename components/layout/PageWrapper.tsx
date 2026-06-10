import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

/**
 * Conteneur de largeur maximale pour les pages publiques.
 * narrow = true → max-w-2xl (pages de contenu)
 * narrow = false → max-w-5xl (pages avec sidebar ou layout large)
 */
export function PageWrapper({
  children,
  className,
  narrow = true,
}: PageWrapperProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full px-4 py-10 sm:py-16",
        narrow ? "max-w-2xl" : "max-w-5xl",
        className
      )}
    >
      {children}
    </main>
  );
}
