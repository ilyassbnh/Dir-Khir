"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, HandHeart } from "lucide-react";
import { joinNeed } from "@/app/actions/needs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface NeedCardProps {
    need: {
        id: string;
        title: string;
        description: string;
        category: string;
        city: string;
        createdAt: Date;
        whatsapp_number: string | null;
        status: string;
    };
    initialParticipantsCount: number;
    initialIsParticipating: boolean;
    currentUserId?: string;
}

export function NeedCard({
    need,
    initialParticipantsCount,
    initialIsParticipating,
    currentUserId,
}: NeedCardProps) {
    const router = useRouter();
    const [isParticipating, setIsParticipating] = useState(initialIsParticipating);
    const [participantsCount, setParticipantsCount] = useState(initialParticipantsCount);
    const [loading, setLoading] = useState(false);

    const handleJoin = async () => {
        if (!currentUserId) {
            toast.error("Veuillez vous connecter pour participer.");
            router.push("/login"); // Optional: redirect to login
            return;
        }

        if (isParticipating) return;

        setLoading(true);
        try {
            const result = await joinNeed(need.id);
            if (result?.error) {
                toast.error(result.error);
            } else {
                setIsParticipating(true);
                setParticipantsCount((prev) => prev + 1);
                toast.success("Merci pour votre aide ! Vous participez maintenant.");
            }
        } catch (error) {
            toast.error("Une erreur s'est produite.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="hover:shadow-lg transition-shadow border-none shadow-md bg-white overflow-hidden flex flex-col h-full">
            <CardHeader className="bg-stone-100 pb-3 border-b border-stone-200">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="bg-white text-[#264653] border-stone-300">
                        {need.category}
                    </Badge>
                    <span className="text-xs font-semibold text-[#E76F51] bg-[#E76F51]/10 px-2 py-1 rounded-full">
                        {need.city}
                    </span>
                </div>
                <CardTitle className="text-xl text-[#264653] line-clamp-1">
                    {need.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col flex-grow">
                <p className="text-stone-600 line-clamp-3 mb-4 min-h-[4.5rem]">
                    {need.description}
                </p>

                <div className="mt-auto space-y-4">
                    {/* Volunteer Counter */}
                    <div className="flex items-center text-sm font-medium text-[#2A9D8F]">
                        <HandHeart className="h-4 w-4 mr-2" />
                        {participantsCount > 0
                            ? `🔥 ${participantsCount} citoyen${participantsCount > 1 ? 's' : ''} aide${participantsCount > 1 ? 'nt' : ''} déjà`
                            : "Soyez le premier à aider !"}
                    </div>

                    <div className="flex gap-2">
                        {/* Join Button */}
                        <Button
                            onClick={handleJoin}
                            disabled={isParticipating || loading}
                            className={`flex-1 ${isParticipating
                                    ? "bg-stone-200 text-stone-500 hover:bg-stone-200 cursor-default"
                                    : "bg-[#2A9D8F] hover:bg-[#21867a] text-white"
                                }`}
                        >
                            {loading ? "..." : isParticipating ? "Vous participez ✅" : "Je participe"}
                        </Button>

                        {/* WhatsApp Button */}
                        {need.whatsapp_number && (
                            <Button
                                asChild
                                variant="outline"
                                className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                            >
                                <a
                                    href={`https://wa.me/${need.whatsapp_number.replace('+', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Contacter sur WhatsApp"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                </a>
                            </Button>
                        )}
                    </div>

                    <div className="flex justify-between items-center text-xs text-stone-400 pt-2 border-t border-stone-100">
                        <span>{new Date(need.createdAt).toLocaleDateString("fr-MA", { day: 'numeric', month: 'long' })}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
