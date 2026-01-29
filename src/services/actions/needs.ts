"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { needs, participants } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createNeedSchema } from "@/services/schemata/needs";

export async function createNeed(prevState: any, formData: FormData) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        throw new Error("Vous devez être connecté pour publier un besoin.");
    }

    const rawData = {
        title: formData.get("title"),
        description: formData.get("description"),
        city: formData.get("city"),
        category: formData.get("category"),
        whatsapp_number: formData.get("whatsapp_number"),
    };

    const validatedFields = createNeedSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await db.insert(needs).values({
            title: validatedFields.data.title,
            description: validatedFields.data.description,
            city: validatedFields.data.city,
            category: validatedFields.data.category,
            whatsapp_number: validatedFields.data.whatsapp_number,
            created_by: session.user.id,
        });
    } catch (e) {
        console.error(e);
        return {
            message: "Une erreur est survenue lors de la création du besoin.",
        };
    }

    revalidatePath("/");
    redirect("/mon-espace");
}

export async function joinNeed(needId: string) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return {
            error: "Vous devez être connecté pour participer.",
        };
    }

    try {
        await db.insert(participants).values({
            needId: needId,
            userId: session.user.id,
        });

    } catch (e) {
        console.error("Join Error:", e);
        return {
            error: "Une erreur est survenue.",
        };
    }

    revalidatePath("/");
    revalidatePath("/mon-espace");
    return { success: true };
}
