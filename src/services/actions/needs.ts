"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { needs, participants } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createNeedSchema } from "@/services/schemata/needs";

import { catchError } from "@/lib/utils";

export async function createNeed(prevState: any, formData: FormData) {
    try {
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

        await db.insert(needs).values({
            title: validatedFields.data.title,
            description: validatedFields.data.description,
            city: validatedFields.data.city,
            category: validatedFields.data.category,
            whatsapp_number: validatedFields.data.whatsapp_number,
            created_by: session.user.id,
        });

        revalidatePath("/");

    } catch (e) {
        return catchError(e);
    }
    // Redirect must be outside try/catch if we want to avoid catching the NEXT_REDIRECT error manually
    // However, catchError DOES handle NEXT_REDIRECT by rethrowing, so we can technically put it inside.
    // But adhering to the safe pattern:
    redirect("/mon-espace");
}

export async function joinNeed(needId: string) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return {
                error: "Vous devez être connecté pour participer.",
            };
        }

        await db.insert(participants).values({
            needId: needId,
            userId: session.user.id,
        });

        revalidatePath("/");
        revalidatePath("/mon-espace");
        return { success: true };

    } catch (e) {
        // This function returns { success: boolean, error?: string }
        // We need to map { message: string } to this shape if needed, or just return { error: message }
        const err = catchError(e);
        return { error: err.message };
    }
}
