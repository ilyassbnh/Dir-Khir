import { type Metadata } from "next";
import SignInForm from "./form";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Connexion - Moul el Café",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-6 zellige-pattern bg-background">
      <Card className="w-full max-w-md bg-card/95 backdrop-blur shadow-2xl border-primary/20">
        <CardHeader className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-primary">Moul el Café</h1>
          <CardTitle className="text-xl">Connexion</CardTitle>
          <CardDescription>Rejoignez votre communauté solidaire</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignInForm />
          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Pas encore de compte ?{" "}
              <Link href={"/signup"} className="font-semibold text-primary hover:underline">
                Créez-en un
              </Link>
            </p>
            <Link href="/" className="block mt-4 text-xs text-muted-foreground hover:text-foreground">
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
