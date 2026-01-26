import { NeedsFeed } from "@/components/needs-feed";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 zellige-pattern border-b border-border/50">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-600 mb-6 drop-shadow-sm">
            L&apos;entraide de quartier, <br /> de Tanger à Lagouira
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connectez-vous avec vos voisins, proposez votre aide ou demandez un coup de main.
            Moul el Café, c&apos;est la solidarité marocaine en un clic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-12 px-8 shadow-lg shadow-primary/20" asChild>
              <Link href="/proposer-un-besoin">Demander de l&apos;aide</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-12 px-8 border-primary/20 hover:bg-primary/5" asChild>
              <Link href="#feed">Voir les besoins</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm font-medium text-orange-700 bg-orange-50 inline-block px-4 py-2 rounded-full border border-orange-100">
            <span>🔥 5 citoyens aident déjà aujourd&apos;hui</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
      </section>

      {/* Needs Feed Section */}
      <section id="feed" className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Les Derniers Besoins</h2>
          {/* Filters could go here */}
        </div>
        <Suspense fallback={<div className="text-center py-20">Chargement des besoins...</div>}>
          <NeedsFeed />
        </Suspense>
      </section>
    </main>
  );
}
