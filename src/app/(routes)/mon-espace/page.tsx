import { db } from "@/db";
import { needs } from "@/db/schema";
import { getServerSession } from "@/lib/auth/get-session";
import { desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default async function DashboardPage() {
    const session = await getServerSession();

    if (!session) {
        redirect("/signin");
    }

    const myNeeds = await db.query.needs.findMany({
        where: eq(needs.userId, session.user.id),
        orderBy: [desc(needs.createdAt)],
    });

    return (
        <div className="min-h-screen bg-background py-10 px-4">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Mon Espace</h1>
                        <p className="text-muted-foreground">Gérez vos demandes et vos contributions.</p>
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                        <Link href="/proposer-un-besoin">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Nouveau Besoin
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-6">
                    <h2 className="text-xl font-semibold border-b pb-2">Mes Demandes ({myNeeds.length})</h2>

                    {myNeeds.length === 0 ? (
                        <div className="text-center py-12 bg-card rounded-lg border border-dashed text-muted-foreground">
                            Vous n&apos;avez pas encore publié de besoin.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {myNeeds.map((need) => (
                                <Card key={need.id} className="border-l-4 border-l-primary/50">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <Badge variant="outline">{need.category}</Badge>
                                            <Badge variant={need.status === 'fulfilled' ? "secondary" : "default"}>
                                                {need.status === 'fulfilled' ? "Complet" : "Ouvert"}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-lg mt-2">{need.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{need.description}</p>
                                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                                            <span>{new Date(need.createdAt).toLocaleDateString()}</span>
                                            <span>{need.city}</span>
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
