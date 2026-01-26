import { type Metadata } from "next";
import Link from "next/link";
import SignInForm from "../signin/form"; // Reusing form logic for now, or should create new? Using existing form component but wrapping with new UI. 
// Actually, user asked for Shadcn UI form. Existing might be Shadcn. valid to reuse if it is.
// But I need to ensure the styling matches. 
// Let's import the existing form and wrap it, or check the form content.
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Connexion - Moul el Café",
};

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center p-6 bg-background zellige-pattern">
            <Card className="w-full max-w-md shadow-xl border-primary/20 backdrop-blur-sm bg-card/95">
                <CardHeader className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-primary tracking-tight">Moul el Café</h1>
                    <CardTitle className="text-xl font-medium text-foreground">Marhba Bikum</CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Connectez-vous pour rejoindre l&apos;entraide.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* We will assume SignInForm exists and is compatible, or refactor it next. */}
                    <SignInForm />

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-muted" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-2 text-muted-foreground">Ou</span>
                        </div>
                    </div>

                    <div className="text-center text-sm">
                        <p className="text-muted-foreground">
                            Pas encore de compte ?{" "}
                            <Link href="/register" className="font-semibold text-secondary hover:text-secondary/80 hover:underline transition-colors">
                                Créer un compte
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
