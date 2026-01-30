"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Link from "next/link";
import { Loader2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "@/lib/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginSchema) => {
        setLoading(true);
        setError(null);
        try {
            await signIn.email({
                email: data.email,
                password: data.password,
            }, {
                onSuccess: () => {
                    toast.success("Bon retour parmi nous !");
                    router.push("/");
                    router.refresh();
                },
                onError: (ctx) => {
                    setError(ctx.error.message || "Erreur de connexion");
                    setLoading(false);
                },
            });
        } catch (err) {
            setError("Une erreur inattendue est survenue.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4 relative overflow-hidden">
            {/* Background Pattern Hint */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("/patterns/moroccan-pattern.png")', backgroundSize: '100px' }}>
            </div>

            <Card className="w-full max-w-md z-10 shadow-xl border-none rounded-xl bg-white">
                <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-2xl font-bold text-[#2A9D8F]">Se connecter</CardTitle>
                    <CardDescription className="text-stone-600">
                        Accédez à votre espace Moul el Café
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {error && (
                        <Alert variant="destructive" className="mb-4">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Erreur</AlertTitle>
                            <AlertDescription>
                                {error}
                            </AlertDescription>
                        </Alert>
                    )}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="exemple@email.com"
                                                {...field}
                                                className="border-input rounded-md px-3 py-2 focus:ring-primary"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mot de passe</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                {...field}
                                                className="border-input rounded-md px-3 py-2 focus:ring-primary"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full bg-[#2A9D8F] hover:bg-[#21867a] text-white"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Connexion...
                                    </>
                                ) : (
                                    "Se connecter"
                                )}
                            </Button>
                            <div className="text-center text-sm text-muted-foreground mt-4">
                                Pas encore de compte ?{" "}
                                <Link href="/register" className="text-[#E76F51] hover:underline font-medium">
                                    S'inscrire
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
