import { NeedCard, type Need } from "@/components/need-card"

interface NeedsGridProps {
  needs: Need[]
  participationCounts: Record<string, number>
  userParticipationSet: Set<string>
  currentUserId?: string
}

export function NeedsGrid({
  needs,
  participationCounts,
  userParticipationSet,
  currentUserId
}: NeedsGridProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Besoins en cours
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment vous pouvez aider votre communauté dès maintenant.
          </p>
        </div>

        {needs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-stone-200">
            <p className="text-xl text-stone-500 mb-4">Aucun besoin pour le moment.</p>
            <p className="text-stone-400">Soyez le premier à demander de l'aide ou à proposer un service !</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {needs.map((need) => (
              <NeedCard
                key={need.id}
                need={need}
                initialParticipantsCount={participationCounts[need.id] || 0}
                initialIsParticipating={userParticipationSet.has(need.id)}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

