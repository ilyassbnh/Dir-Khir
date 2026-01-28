"use client"

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const cities = [
  "Toutes les villes",
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fès",
  "Tanger",
  "Agadir",
  "Meknès",
  "Oujda",
  "Kenitra",
  "Tétouan",
  "Safi",
  "Laâyoune",
]

export function HeroSection() {
  const [selectedCity, setSelectedCity] = useState("Toutes les villes")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-28 lg:py-32">
      {/* Zellige Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="zellige" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M10 0 L10 20" fill="none" stroke="white" strokeWidth="0.3" />
              <path d="M0 10 L20 10" fill="none" stroke="white" strokeWidth="0.3" />
              <circle cx="10" cy="10" r="2" fill="white" opacity="0.5" />
              <circle cx="0" cy="0" r="1" fill="white" opacity="0.3" />
              <circle cx="20" cy="0" r="1" fill="white" opacity="0.3" />
              <circle cx="0" cy="20" r="1" fill="white" opacity="0.3" />
              <circle cx="20" cy="20" r="1" fill="white" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zellige)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance">
          {"L'entraide de quartier,"}
          <br />
          <span className="text-white/90">de Tanger à Lagouira</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
          Connectez-vous pour aider vos voisins.
        </p>

        {/* City Filter Dropdown */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-md">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full h-auto flex items-center justify-between gap-2 px-6 py-4 bg-white rounded-xl text-foreground shadow-lg hover:shadow-xl transition-shadow border-none [&>span]:text-base">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-normal">Filtrer par ville</span>
                  <span className="font-medium text-foreground mx-2"><SelectValue placeholder="Choisir une ville" /></span>
                </div>
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  )
}
