import { db } from "@/db";
import { needs, participants } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm"; // sql needed for aggregation
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NeedCard } from "@/components/need-card";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function HomePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // Strategy: Fetch needs, then fetch participation counts and user status.
    // For simplicity and speed in prototype, we can fetch all and map, 
    // or use a smarter query. 
    // Let's stick to Drizzle's query builder for a "dashboard-like" view.

    // Fetch all needs
    const allNeeds = await db.select().from(needs).orderBy(desc(needs.createdAt));

    // Fetch all participants (not scalable for millions, but fine for prototype)
    // Or better: fetch aggregated counts.
    // const participantCounts = await db.select({ needId: participants.needId, count: count() }).from(participants).groupBy(participants.needId);

    // Let's do a simple approach: For each need, we pass data to the client component. 
    // Actually, to get IS_PARTICIPATING status efficiently, we should fetch the user's participations.

    const userParticipations = session
        ? await db.select().from(participants).where(eq(participants.userId, session.user.id))
        : [];

    const userParticipationSet = new Set(userParticipations.map(p => p.needId));

    // For counts, let's just fetch all participants for now (easiest for small app)
    // Optimization: groupBy query
    const allParticipants = await db.select().from(participants);

    // Map counts
    const participationCounts: Record<string, number> = {};
    allParticipants.forEach(p => {
        participationCounts[p.needId] = (participationCounts[p.needId] || 0) + 1;
    });


    return (
        <div className="min-h-screen bg-stone-50 flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-[#264653] text-white py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'url("/patterns/moroccan-pattern.png")', backgroundSize: '100px' }}>
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E9C46A]">
                        Moul el Café
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-stone-200">
                        L'entraide communautaire au cœur du Maroc.
                        Partagez, aidez, connectez-vous.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-[#E76F51] hover:bg-[#d66144] text-white text-lg px-8">
                            <Link href="/proposer-un-besoin">Proposer un Besoin</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-[#2A9D8F] text-[#2A9D8F] hover:bg-[#2A9D8F] hover:text-white text-lg px-8 bg-transparent">
                            <Link href="/mon-espace">Mon Espace</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Needs Grid Section */}
            <section className="flex-1 py-12 px-4 max-w-7xl mx-auto w-full">
                <h2 className="text-3xl font-bold text-[#264653] mb-8 text-center border-b-4 border-[#2A9D8F] inline-block mx-auto pb-2">
                    Besoins Récents
                </h2>

                {allNeeds.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-stone-200">
                        <p className="text-xl text-stone-500 mb-4">Aucun besoin pour le moment.</p>
                        <p className="text-stone-400">Soyez le premier à demander de l'aide ou à proposer un service !</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allNeeds.map((need) => (
                            <NeedCard
                                key={need.id}
                                need={need}
                                initialParticipantsCount={participationCounts[need.id] || 0}
                                initialIsParticipating={userParticipationSet.has(need.id)}
                                currentUserId={session?.user?.id}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
