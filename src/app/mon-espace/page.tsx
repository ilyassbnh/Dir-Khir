import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { needs, participants, user } from "@/db/schema"; // Ensure imports are correct
import { desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle, Users } from "lucide-react";

export default async function DashboardPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    // Explicitly select columns to ensure type safety if needed, or just use findMany
    const myNeeds = await db.query.needs.findMany({
        where: eq(needs.created_by, session.user.id),
        orderBy: [desc(needs.createdAt)],
    });

    // Determine how to join simple tables without defined relations if needed, 
    // or just use raw sql or multiple queries if necessary.
    // Assuming we want: needs where participants.userId == session.user.id
    // But we need to join needs with participants. 
    // Since relations aren't explicitly visible, let's try a direct query approach if Drizzle supports it easily,
    // Or we use db.select().from(participants).innerJoin(needs, eq(participants.needId, needs.id)).where(eq(participants.userId, session.user.id))

    // Safer approach with plain Drizzle select + join
    const myParticipations = await db
        .select({
            need: needs,
            joinedAt: participants.joinedAt,
        })
        .from(participants)
        .innerJoin(needs, eq(participants.needId, needs.id))
        .where(eq(participants.userId, session.user.id))
        .orderBy(desc(participants.joinedAt));


    return (
        <div className="min-h-screen bg-stone-50 py-10 px-4 relative overflow-hidden">
            {/* Background Pattern Hint */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("/patterns/moroccan-pattern.png")', backgroundSize: '100px' }}>
            </div>

            <div className="max-w-5xl mx-auto space-y-12 z-10 relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-[#2A9D8F]">Mon Espace</h1>
                        <p className="text-stone-600">Gérez vos demandes et visualisez vos contributions.</p>
                    </div>
                    <Button asChild className="bg-[#E76F51] hover:bg-[#d66144] text-white">
                        <Link href="/proposer-un-besoin">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Nouveau Besoin
                        </Link>
                    </Button>
                </div>

                {/* Section 1: Mes Demandes */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold border-b border-stone-200 pb-2 text-[#264653] flex items-center gap-2">
                        <span>📌</span> Mes Demandes ({myNeeds.length})
                    </h2>

                    {myNeeds.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-lg border border-dashed border-stone-300 text-stone-500 shadow-sm">
                            Vous n&apos;avez pas encore publié de besoin.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {myNeeds.map((need) => (
                                <Card key={need.id} className="border-l-4 border-l-[#2A9D8F] shadow-sm hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <Badge variant="outline" className="bg-stone-100">{need.category}</Badge>
                                            <Badge className={need.status === 'Fulfilled' ? "bg-green-600" : "bg-[#F4A261]"}>
                                                {need.status === 'Fulfilled' ? "Complet" : "Ouvert"}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-lg mt-2 text-[#264653] font-bold">{need.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-stone-600 line-clamp-2 mb-4">{need.description}</p>
                                        <div className="flex justify-between items-center text-xs text-stone-500">
                                            <span>{need.createdAt ? new Date(need.createdAt).toLocaleDateString("fr-MA") : "Date inconnue"}</span>
                                            <span className="font-medium text-[#E76F51]">{need.city}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>

                {/* Section 2: Mes Participations */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold border-b border-stone-200 pb-2 text-[#264653] flex items-center gap-2">
                        <Users className="h-5 w-5 text-[#E9C46A]" /> Mes Participations ({myParticipations.length})
                    </h2>

                    {myParticipations.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-lg border border-dashed border-stone-300 text-stone-500 shadow-sm">
                            Vous n&apos;avez participé à aucun besoin pour le moment.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {myParticipations.map(({ need, joinedAt }) => (
                                <Card key={need.id} className="border-l-4 border-l-[#E9C46A] shadow-sm hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <Badge variant="outline" className="bg-stone-100">{need.category}</Badge>
                                            <span className="text-xs text-stone-400">Rejoint le {new Date(joinedAt).toLocaleDateString("fr-MA")}</span>
                                        </div>
                                        <CardTitle className="text-lg mt-2 text-[#264653] font-bold">{need.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-stone-600 line-clamp-2 mb-4">{need.description}</p>
                                        <div className="flex justify-between items-center text-xs text-stone-500">
                                            <span className="font-medium text-[#2A9D8F]">Propriétaire: ...</span> {/* Could fetch owner name if needed */}
                                            <span className="font-medium text-[#E76F51]">{need.city}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
