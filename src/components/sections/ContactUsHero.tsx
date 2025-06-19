import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select";
import Link from "next/link";

const budgetOptions = [
    "Moins de 50M FCFA",
    "50M - 100M FCFA",
    "100M - 200M FCFA",
    "Plus de 200M FCFA",
];

const serviceOptions = [
    "Achat de terrain",
    "Construction",
    "Rénovation",
    "Gestion locative",
    "Investissement",
];

export function ContactUsHero() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h2 className="text-2xl md:text-4xl font-allenoire mb-12">
                            Contactez-nous
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <p className="text-gray-400 mb-2">Email</p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="hover:text-secondaire"
                                >
                                    <Link
                                        href="mailto:contact@sigiafrica.com"
                                        className="text-lg"
                                    >
                                        contact@sigiafrica.com
                                    </Link>
                                </Button>
                            </div>

                            <div>
                                <p className="text-gray-400 mb-2">Téléphone</p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="hover:text-secondaire"
                                >
                                    <Link
                                        href="tel:+22997979797"
                                        className="text-lg"
                                    >
                                        +229 97 97 97 97
                                    </Link>
                                </Button>
                            </div>

                            <div>
                                <p className="text-gray-400 mb-2">
                                    Notre bureau
                                </p>
                                <p className="text-lg">
                                    Fidjrossè Kpota, Cotonou, Bénin
                                </p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="hover:text-secondaire"
                                >
                                    <Link
                                        href="https://maps.google.com"
                                        target="_blank"
                                    >
                                        Voir la localisation
                                    </Link>
                                </Button>
                            </div>

                            <div>
                                <p className="text-gray-400 mb-4">
                                    Suivez-nous
                                </p>
                                <div className="flex gap-4">
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-10 h-10 p-0"
                                    >
                                        <Link
                                            href="https://facebook.com"
                                            target="_blank"
                                        >
                                            <span className="text-lg">f</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-10 h-10 p-0"
                                    >
                                        <Link
                                            href="https://twitter.com"
                                            target="_blank"
                                        >
                                            <span className="text-lg">𝕏</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-10 h-10 p-0"
                                    >
                                        <Link
                                            href="https://linkedin.com"
                                            target="_blank"
                                        >
                                            <span className="text-lg">in</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Project Form */}
                    <div>
                        <div className="flex items-center gap-2 mb-12">
                            <div className="w-6 h-6 bg-secondaire"></div>
                            <h2 className="text-2xl md:text-4xl font-allenoire">
                                Vous avez un projet en tête ?
                            </h2>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Input
                                        placeholder="Nom"
                                        className="bg-[#1A1A1A] border border-gray-700 h-12 focus:border-secondaire"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="tel"
                                        placeholder="Téléphone"
                                        className="bg-[#1A1A1A] border border-gray-700 h-12 focus:border-secondaire"
                                    />
                                </div>
                            </div>

                            <Input
                                type="email"
                                placeholder="Email professionnel"
                                className="bg-[#1A1A1A] border border-gray-700 h-12 focus:border-secondaire"
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                                <Select>
                                    <SelectTrigger className="bg-[#1A1A1A] border border-gray-700 h-12 focus:border-secondaire">
                                        <SelectValue placeholder="Budget" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {budgetOptions.map((option) => (
                                            <SelectItem
                                                key={option}
                                                value={option}
                                            >
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select>
                                    <SelectTrigger className="bg-[#1A1A1A] border border-gray-700 h-12 focus:border-secondaire">
                                        <SelectValue placeholder="Service souhaité" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {serviceOptions.map((option) => (
                                            <SelectItem
                                                key={option}
                                                value={option}
                                            >
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <Textarea
                                placeholder="Message"
                                className="bg-[#1A1A1A] border border-gray-700 min-h-[150px] resize-none focus:border-secondaire"
                            />

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="rounded bg-[#1A1A1A] border-gray-700"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm text-gray-400"
                                >
                                    J&apos;accepte les conditions
                                    d&apos;utilisation et la politique de
                                    confidentialité
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="bg-secondaire text-black hover:bg-secondaire/90 h-12 px-8 cursor-pointer"
                            >
                                Envoyer
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
