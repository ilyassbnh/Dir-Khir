import { db } from "@/db";
import { needs, volunteers } from "@/db/schema";
import { NeedCard } from "./need-card";
import { desc, eq, sql } from "drizzle-orm";

export async function NeedsFeed() {
    // Fetch needs with a volunteer count
    // Note: Complex join count with Drizzle sometimes needs raw SQL or separate queries.
    // For prototype, we'll fetch needs and simplified counts if possible, or just raw needs first.

    const allNeeds = await db.query.needs.findMany({
        orderBy: [desc(needs.createdAt)],
        limit: 50,
    });

    // For a real prototype, we should get counts.
    // We can do it via a separate aggregation or just map for now if list is small.
    // Optimization: use a group by query in real prod.

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {allNeeds.map((need) => (
                <NeedCard key={need.id} need={need} volunteerCount={0} />
            ))}
            {allNeeds.length === 0 && (
                <div className="col-span-full text-center py-12 text-muted-foreground zellige-pattern rounded-lg border border-dashed">
                    <p className="bg-background/80 inline-block px-4 py-2 rounded">Aucun besoin pour le moment. Soyez le premier à en proposer un !</p>
                </div>
            )}
        </div>
    );
}
