import Link from "next/link";

const LINKS = [
  { href: "/a-propos", label: "À propos" },
  { href: "/sources", label: "Sources" },
  { href: "/faq", label: "FAQ" },
  { href: "/confidentialite", label: "Confidentialité" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-[13px] text-neutral-500">
            Aucune donnée financière ne quitte votre appareil.
          </p>

          <nav aria-label="Liens de pied de page">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[13px] text-neutral-500 hover:text-neutral-800 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-6 text-center text-[11px] text-neutral-400">
          Ce calculateur est un outil indicatif. Il ne constitue pas une fatwa
          et ne se substitue pas à l&apos;avis d&apos;un érudit qualifié.
        </p>
      </div>
    </footer>
  );
}
