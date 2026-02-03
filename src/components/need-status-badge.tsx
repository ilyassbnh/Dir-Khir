'use client'

import { Badge } from "@/components/ui/badge";
import { toggleNeedStatus } from "@/app/actions/needs";
import { useTransition } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface NeedStatusBadgeProps {
    needId: string;
    status: string;
}

export function NeedStatusBadge({ needId, status }: NeedStatusBadgeProps) {
    const [isPending, startTransition] = useTransition();

    const isFulfilled = status === "Fulfilled";

    const handleToggle = () => {
        startTransition(async () => {
            try {
                await toggleNeedStatus(needId, status);
                toast.success("Statut mis à jour");
            } catch (error) {
                toast.error("Erreur lors de la mise à jour du statut");
                console.error(error);
            }
        });
    };

    return (
        <Badge
            onClick={handleToggle}
            className={`cursor-pointer select-none transition-all hover:opacity-80 flex items-center gap-1 ${isFulfilled ? "bg-green-600 hover:bg-green-700" : "bg-[#F4A261] hover:bg-[#e68b3f]"
                }`}
        >
            {isPending && <Loader2 className="h-3 w-3 animate-spin" />}
            {isFulfilled ? "Complet" : "Ouvert"}
        </Badge>
    );
}
