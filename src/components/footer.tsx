import Link from "next/link"
import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Coffee className="h-7 w-7 text-primary" />
              <span className="text-lg font-bold text-foreground">Dir Khir</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {"L'entraide de quartier, de Tanger à Lagouira. Ensemble, nous sommes plus forts."}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-foreground">Navigation</h4>
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link href="/mon-espace" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mon Espace
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tous les besoins
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-foreground">Légal</h4>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Confidentialité
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Conditions d{"'"}utilisation
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Dir Khir. Tous droits réservés. Fait avec amour au Maroc.
          </p>
        </div>
      </div>
    </footer>
  )
}
