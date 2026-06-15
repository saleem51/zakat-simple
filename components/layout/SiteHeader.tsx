import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-100 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-[16px] font-semibold text-neutral-900 hover:text-brand-600 transition-colors"
          aria-label="Zakāt Calculator — Retour à l'accueil"
        >
          Zakāt<span className="text-brand-600">.</span>
        </Link>

        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-1">
            {[
              { href: "/comment-calculer-sa-zakat", label: "Guide" },
              { href: "/nisab", label: "Niṣāb" },
              { href: "/beneficiaires-zakat", label: "Bénéficiaires" },
              { href: "/faq", label: "FAQ" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-md px-3 py-1.5 text-[14px] text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors hidden sm:block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button asChild size="sm">
          <Link href="/calculateur">Calculer ma Zakāt</Link>
        </Button>
      </div>
    </header>
  );
}
