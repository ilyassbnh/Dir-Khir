import { type Metadata } from "next";
import Link from "next/link";
import SignUpForm from "./form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Inscription - Moul el Café",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-6 zellige-pattern bg-background">
      <Card className="w-full max-w-md bg-card/95 backdrop-blur shadow-2xl border-secondary/20">
        <CardHeader className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-secondary">Moul el Café</h1>
          <CardTitle className="text-xl">Inscription</CardTitle>
          <CardDescription>Devenez un citoyen actif aujourd&apos;hui</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignUpForm />
          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              Déjà membre ?{" "}
              <Link href={"/signin"} className="font-semibold text-secondary hover:underline">
                Connectez-vous
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
