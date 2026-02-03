'use server'

import { auth } from "@/lib/auth";
import { db } from "@/db";
import { needs } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export async function toggleNeedStatus(needId: string, currentStatus: string) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        throw new Error("Unauthorized");
    }

    // Determine new status
    const newStatus = currentStatus === "Open" ? "Fulfilled" : "Open";

    // Update only if user is the creator
    // We strictly check created_by matching session user id
    const [updatedNeed] = await db
        .update(needs)
        .set({ status: newStatus })
        .where(
            and(
                eq(needs.id, needId),
                eq(needs.created_by, session.user.id)
            )
        )
        .returning();

    if (!updatedNeed) {
        throw new Error("Need not found or you are not authorized to edit it.");
    }

    revalidatePath("/mon-espace");
    return { success: true, status: newStatus };
}
