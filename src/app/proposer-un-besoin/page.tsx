import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { CreateNeedForm } from "@/components/create-need-form";

export default async function ProposerUnBesoinPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern Hint */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("/patterns/moroccan-pattern.png")', backgroundSize: '100px' }}>
            </div>

            <div className="max-w-3xl mx-auto z-10 relative">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#2A9D8F] mb-2">Proposer un Besoin</h1>
                    <p className="text-stone-600">
                        Remplissez le formulaire ci-dessous pour partager un besoin avec la communauté.
                        Soyez précis pour faciliter l'aide.
                    </p>
                </div>

                <CreateNeedForm />
            </div>
        </div>
    );
}
