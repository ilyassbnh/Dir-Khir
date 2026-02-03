import { db } from "@/db";
import { needs, participants, type user } from "@/db/schema";
import { desc, eq, count, getTableColumns, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
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
    // Fetch all needs with participant counts

    const needsWithCounts = await db
        .select({
            ...getTableColumns(needs),
            participantsCount: sql<number>`(
                SELECT count(*)::int 
                FROM ${participants} 
                WHERE ${participants}.need_id = ${needs}.id
            )`.mapWith(Number),
        })
        .from(needs)
        .orderBy(desc(needs.createdAt));

    const allNeeds = needsWithCounts.map(({ participantsCount, ...need }) => need);

    // Map counts from the aggregated result
    const participationCounts: Record<string, number> = {};
    needsWithCounts.forEach(nc => {
        participationCounts[nc.id] = nc.participantsCount;
    });

    // Fetch all participants (not scalable for millions, but fine for prototype)
    // Or better: fetch aggregated counts.
    // const participantCounts = await db.select({ needId: participants.needId, count: count() }).from(participants).groupBy(participants.needId);

    // Let's do a simple approach: For each need, we pass data to the client component. 
    // Actually, to get IS_PARTICIPATING status efficiently, we should fetch the user's participations.

    const userParticipations = session
        ? await db.select().from(participants).where(eq(participants.userId, session.user.id))
        : [];

    const userParticipationSet = new Set(userParticipations.map(p => p.needId));




    return (
        <div className="min-h-screen flex flex-col font-sans">
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

