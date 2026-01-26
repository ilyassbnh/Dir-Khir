"use server";

import { db } from "@/db";
import { needs } from "@/db/schema";
import { getServerSession } from "@/lib/auth/get-session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createNeedSchema = z.object({
    title: z.string().min(5, "Le titre doit faire au moins 5 caractères"),
    description: z.string().min(20, "La description doit faire au moins 20 caractères"),
    city: z.string().min(1, "Veuillez sélectionner une ville"),
    category: z.string().min(1, "Veuillez sélectionner une catégorie"),
    whatsapp: z.string().optional(),
});

export async function createNeedAction(formData: FormData) {
    const session = await getServerSession();
    if (!session) {
        throw new Error("Vous devez être connecté pour proposer un besoin.");
    }

    const rawData = {
        title: formData.get("title"),
        description: formData.get("description"),
        city: formData.get("city"),
        category: formData.get("category"),
        whatsapp: formData.get("whatsapp"),
    };

    const validatedvData = createNeedSchema.safeParse(rawData);

    if (!validatedvData.success) {
        return {
            error: "Données invalides. Veuillez vérifier le formulaire.",
            details: validatedvData.error.flatten()
        };
    }

    const { title, description, city, category, whatsapp } = validatedvData.data;

    await db.insert(needs).values({
        title,
        description,
        city,
        category,
        whatsapp: whatsapp || null,
        userId: session.user.id,
    });

    revalidatePath("/");
    revalidatePath("/mon-espace");
    redirect("/");
}
