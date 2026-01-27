"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signUp.email({
                email,
                password,
                name,
            }, {
                onSuccess: () => {
                    toast.success("Bienvenue chez Moul el Café !");
                    router.push("/");
                    router.refresh();
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message || "Erreur d'inscription");
                    setLoading(false);
                },
            });
        } catch (err) {
            toast.error("Une erreur inattendue est survenue.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4 relative overflow-hidden">
            {/* Background Pattern Hint */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("/patterns/moroccan-pattern.png")', backgroundSize: '100px' }}>
            </div>

            <Card className="w-full max-w-md z-10 shadow-xl border-none">
                <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-2xl font-bold text-[#2A9D8F]">Rejoignez la communauté</CardTitle>
                    <CardDescription className="text-stone-600">
                        Créez votre compte Moul el Café
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nom Complet</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Votre nom"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="exemple@email.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-[#2A9D8F] hover:bg-[#21867a] text-white"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Création du compte...
                                </>
                            ) : (
                                "S'inscrire"
                            )}
                        </Button>
                        <div className="text-center text-sm text-muted-foreground mt-4">
                            Déjà un compte ?{" "}
                            <Link href="/login" className="text-[#E76F51] hover:underline font-medium">
                                Se connecter
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
