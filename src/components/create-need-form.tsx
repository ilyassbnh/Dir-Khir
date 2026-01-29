"use client";

import { useActionState } from "react";
import { createNeed } from "@/services/actions/needs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const initialState = {
    message: undefined,
    error: undefined,
};

export function CreateNeedForm() {
    const [state, formAction, isPending] = useActionState(createNeed, initialState as any);

    return (
        <Card className="border-none shadow-lg">
            <CardContent className="p-6">
                <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Titre du besoin</Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="Ex: Distribution de paniers alimentaires"
                            required
                            minLength={5}
                        />
                        {state?.error?.title && (
                            <p className="text-sm text-red-500">{state.error.title}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="city">Ville</Label>
                            <Select name="city" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Sélectionner une ville" />
                                </SelectTrigger>
                                <SelectContent>
                                    {["Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir", "Fès", "Meknès", "Oujda", "Tetouan", "Safi"].map((city) => (
                                        <SelectItem key={city} value={city}>
                                            {city}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Catégorie</Label>
                            <Select name="category" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Catégorie" />
                                </SelectTrigger>
                                <SelectContent>
                                    {["Donation", "Bénévolat", "Urgence", "Autre"].map((cat) => (
                                        <SelectItem key={cat} value={cat}>
                                            {cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description détaillée</Label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Décrivez votre besoin en détail..."
                            className="min-h-[120px]"
                            required
                            minLength={20}
                        />
                        {state?.error?.description && (
                            <p className="text-sm text-red-500">{state.error.description}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="whatsapp_number">Numéro WhatsApp</Label>
                        <Input
                            id="whatsapp_number"
                            name="whatsapp_number"
                            placeholder="+2126XXXXXXXX"
                            required
                            pattern="^\+212[5-7][0-9]{8}$"
                        />
                        <p className="text-xs text-muted-foreground">Format: +212600000000</p>
                        {state?.error?.whatsapp_number && (
                            <p className="text-sm text-red-500">{state.error.whatsapp_number}</p>
                        )}
                    </div>

                    {state?.message && (
                        <p className="text-sm text-red-500">{state.message}</p>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-[#2A9D8F] hover:bg-[#21867a] text-white"
                        disabled={isPending}
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Publication...
                            </>
                        ) : (
                            "Publier le besoin"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
