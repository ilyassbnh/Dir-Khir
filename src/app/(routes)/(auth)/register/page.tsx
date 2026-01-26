import { type Metadata } from "next";
import Link from "next/link";
import SignUpForm from "../signup/form"; // Reusing existing form logic
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Inscription - Moul el Café",
};

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center p-6 bg-background zellige-pattern">
            <Card className="w-full max-w-md shadow-xl border-secondary/20 backdrop-blur-sm bg-card/95">
                <CardHeader className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-primary tracking-tight">Moul el Café</h1>
                    <CardTitle className="text-xl font-medium text-foreground">Rejoignez la Communauté</CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Créez un compte pour proposer ou recevoir de l&apos;aide.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <SignUpForm />

                    <div className="text-center text-sm">
                        <p className="text-muted-foreground">
                            Vous avez déjà un compte ?{" "}
                            <Link href="/login" className="font-semibold text-primary hover:text-primary/80 hover:underline transition-colors">
                                Se connecter
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
