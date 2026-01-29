import { z } from "zod";

export const createNeedSchema = z.object({
    title: z.string().min(5, "Le titre doit contenir au moins 5 caractères"),
    description: z.string().min(20, "La description doit contenir au moins 20 caractères"),
    city: z.enum(["Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir", "Fès", "Meknès", "Oujda", "Tetouan", "Safi"]),
    category: z.enum(["Donation", "Bénévolat", "Urgence", "Autre"]),
    whatsapp_number: z.string().regex(/^\+212[5-7][0-9]{8}$/, "Numéro invalide (Format: +2126XXXXXXXX)"),
});
