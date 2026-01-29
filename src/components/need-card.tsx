"use client"

import { MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type InferSelectModel } from "drizzle-orm"
import { needs } from "@/db/schema"
import { useState } from "react"
import { joinNeed } from "@/services/actions/needs"
import { toast } from "sonner"

export type Need = InferSelectModel<typeof needs>

interface NeedCardProps {
  need: Need
  initialParticipantsCount?: number
  initialIsParticipating?: boolean
  currentUserId?: string
}

export function NeedCard({
  need,
  initialParticipantsCount = 0,
  initialIsParticipating = false,
  currentUserId
}: NeedCardProps) {
  const [isParticipating, setIsParticipating] = useState(initialIsParticipating)
  const [count, setCount] = useState(initialParticipantsCount)
  const [isLoading, setIsLoading] = useState(false)

  const handleParticipate = async () => {
    if (!currentUserId) return
    setIsLoading(true)

    try {
      const result = await joinNeed(need.id)
      if (result.success) {
        toast.success("Vous participez à ce besoin !")
        setIsParticipating(true)
        // No need to manually setCount, server revalidation will update props
      } else if (result.error) {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error("Une erreur est survenue")
    } finally {
      setIsLoading(false)
    }
  }

  const categoryLabel = need.category === "donation" ? "Don" : "Bénévolat"
  const categoryColor = need.category === "donation"
    ? "bg-secondary/10 text-secondary hover:bg-secondary/20"
    : "bg-primary/10 text-primary hover:bg-primary/20"

  return (
    <div className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all hover:border-primary/30 flex flex-col h-full">
      <div className="flex items-start justify-between gap-4">
        <Badge
          variant="secondary"
          className={`${categoryColor} font-medium`}
        >
          {categoryLabel}
        </Badge>
        {/* Participation Count Badge */}
        <Badge variant="outline" className="flex gap-1 items-center border-border/50 bg-background/50">
          <Users className="h-3 w-3" />
          <span>{count}</span>
        </Badge>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
        {need.title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
        {need.description}
      </p>

      <div className="mt-4 flex items-center gap-2 text-muted-foreground">
        <MapPin className="h-4 w-4" />
        <span className="text-sm">{need.city}</span>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Button
          variant={isParticipating ? "default" : "outline"}
          onClick={handleParticipate}
          disabled={isLoading || !currentUserId}
          className={`flex-1 transition-all ${isParticipating
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border-primary text-primary hover:bg-primary/10 bg-transparent"
            }`}
        >
          {isLoading ? "..." : (isParticipating ? "Je participe déjà" : "Je participe")}
        </Button>
        <Button
          size="icon"
          className="bg-[#25D366] hover:bg-[#20BD5A] text-white shrink-0"
          aria-label="Contact via WhatsApp"
          asChild
        >
          <a href={`https://wa.me/${need.whatsapp_number}`} target="_blank" rel="noopener noreferrer">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </Button>
      </div>
    </div>
  )
}

