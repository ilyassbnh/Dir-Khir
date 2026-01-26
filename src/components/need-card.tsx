"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NeedCardProps {
    need: {
        id: string;
        title: string;
        description: string;
        city: string;
        category: string;
        status: string;
        whatsapp: string | null;
        createdAt: Date;
    };
    volunteerCount?: number;
}

export function NeedCard({ need, volunteerCount = 0 }: NeedCardProps) {
    const isFulfilled = need.status === "fulfilled";

    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <div className="flex justify-between items-start gap-2">
                    <Badge variant={isFulfilled ? "secondary" : "default"} className="mb-2">
                        {need.category}
                    </Badge>
                    <Badge variant="outline" className={cn("mb-2", isFulfilled ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800")}>
                        {isFulfilled ? "Complet" : "Ouvert"}
                    </Badge>
                </div>
                <CardTitle className="text-xl font-bold line-clamp-2 text-primary">{need.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {need.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{need.city}</span>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-2">
                <div className="flex items-center justify-between w-full text-sm">
                    <div className="flex items-center gap-1 text-orange-600 font-medium">
                        <Users className="w-4 h-4" />
                        <span>{volunteerCount} citoyens aident déjà</span>
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-white" disabled={isFulfilled}>
                        Je participe
                    </Button>
                    {need.whatsapp && (
                        <Button size="icon" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50" asChild>
                            <Link href={`https://wa.me/${need.whatsapp}`} target="_blank">
                                <Phone className="w-4 h-4" />
                            </Link>
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
