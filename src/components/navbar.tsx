"use client"

import Link from "next/link"
import { Coffee, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { authClient, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Coffee className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Dir Khir</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Accueil
            </Link>

            {session ? (
              <>
                <Link
                  href="/mon-espace"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Mon Espace
                </Link>
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  asChild
                >
                  <Link href="/proposer-un-besoin">Proposer un besoin</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                  onClick={async () => {
                    await authClient.signOut()
                    router.push("/")
                  }}
                >
                  Déconnexion
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Se connecter</Link>
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/register">S'inscrire</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              {session ? (
                <>
                  <Link
                    href="/mon-espace"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mon Espace
                  </Link>
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-fit" asChild>
                    <Link href="/proposer-un-besoin">Proposer un besoin</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-destructive hover:text-destructive/90 hover:bg-destructive/10 w-fit justify-start px-0"
                    onClick={async () => {
                      await authClient.signOut()
                      setMobileMenuOpen(false)
                      router.push("/")
                    }}
                  >
                    Déconnexion
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="w-fit justify-start px-0" asChild>
                    <Link href="/login">Se connecter</Link>
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit" asChild>
                    <Link href="/register">S'inscrire</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
