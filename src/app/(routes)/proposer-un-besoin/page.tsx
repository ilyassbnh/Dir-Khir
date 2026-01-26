import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createNeedAction } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function CreateNeedPage() {
    return (
        <div className="min-h-screen bg-background py-12 px-4 zellige-pattern">
            <div className="max-w-2xl mx-auto">
                <Card className="bg-card/95 backdrop-blur shadow-xl border-primary/10">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">🤝 Proposer un Besoin</CardTitle>
                        <CardDescription>Décrivez votre besoin pour que la communauté puisse vous aider.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action={createNeedAction} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Titre du besoin</Label>
                                <Input id="title" name="title" placeholder="Ex: Aide pour déménagement" required minLength={5} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Catégorie</Label>
                                <Select name="category" required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choisir une catégorie" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Aide physique">💪 Aide physique</SelectItem>
                                        <SelectItem value="Transport">🚗 Transport</SelectItem>
                                        <SelectItem value="Matériel">🛠️ Matériel</SelectItem>
                                        <SelectItem value="Soutien scolaire">📚 Soutien scolaire</SelectItem>
                                        <SelectItem value="Autre">✨ Autre</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="city">Ville</Label>
                                <Select name="city" required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choisir une ville" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Casablanca">Casablanca</SelectItem>
                                        <SelectItem value="Rabat">Rabat</SelectItem>
                                        <SelectItem value="Marrakech">Marrakech</SelectItem>
                                        <SelectItem value="Tanger">Tanger</SelectItem>
                                        <SelectItem value="Agadir">Agadir</SelectItem>
                                        <SelectItem value="Fès">Fès</SelectItem>
                                        <SelectItem value="Oujda">Oujda</SelectItem>
                                        <SelectItem value="Laâyoune">Laâyoune</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description détaillée</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Expliquez en détail de quoi vous avez besoin..."
                                    className="min-h-[120px]"
                                    required
                                    minLength={20}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="whatsapp" className="text-green-700">Numéro WhatsApp (Optionnel)</Label>
                                <Input id="whatsapp" name="whatsapp" placeholder="Ex: 212600000000" type="tel" className="border-green-200 focus-visible:ring-green-500" />
                                <p className="text-xs text-muted-foreground">Permet aux volontaires de vous contacter directement.</p>
                            </div>

                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                                Publier mon besoin
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
