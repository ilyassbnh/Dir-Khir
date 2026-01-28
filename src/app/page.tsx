import { db } from "@/db";
import { needs, participants, type user } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsBar } from "@/components/stats-bar";
import { NeedsGrid } from "@/components/needs-grid";
import { Footer } from "@/components/footer";

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
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-1">
                <HeroSection />

                <StatsBar />
                <NeedsGrid
                    needs={allNeeds}
                    participationCounts={participationCounts}
                    userParticipationSet={userParticipationSet}
                    currentUserId={session?.user?.id}
                />
            </main>
            <Footer />
        </div>
    );
}

