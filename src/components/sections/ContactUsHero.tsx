"use client";

import React, { useState } from "react";
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
import { useRouter } from "next/navigation";

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
    const [form, setForm] = useState({
        nom: "",
        telephone: "",
        email: "",
        budget: "",
        service: "",
        message: "",
        terms: false,
    });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        let fieldValue: string | boolean = value;
        if (type === "checkbox" && "checked" in e.target) {
            fieldValue = (e.target as HTMLInputElement).checked;
        }
        setForm((prev) => ({
            ...prev,
            [name]: fieldValue,
        }));
    };

    const handleSelect = (name: string, value: string) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                let message = data.message || "Message envoyé avec succès !";
                message = message.replace("au client", "à l'administrateurs");
                setSuccess(message);
                setForm({
                    nom: "",
                    telephone: "",
                    email: "",
                    budget: "",
                    service: "",
                    message: "",
                    terms: false,
                });
            } else {
                setError(data.error || "Une erreur est survenue.");
            }
        } catch {
            setError("Erreur réseau ou serveur.");
        } finally {
            setLoading(false);
        }
    };

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

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Input
                                        name="nom"
                                        placeholder="Nom"
                                        value={form.nom}
                                        onChange={handleChange}
                                        className="bg-[#1A1A1A] border border-gray-700 h-12 focus:border-secondaire"
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="telephone"
                                        type="tel"
                                        placeholder="Téléphone"
                                        value={form.telephone}
                                        onChange={handleChange}
                                        className="bg-[#1A1A1A] border border-gray-700 h-12 focus:border-secondaire"
                                        required
                                    />
                                </div>
                            </div>

                            <Input
                                name="email"
                                type="email"
                                placeholder="Email professionnel"
                                value={form.email}
                                onChange={handleChange}
                                className="bg-[#1A1A1A] border border-gray-700 h-12 focus:border-secondaire"
                                required
                            />

                            <div className="grid md:grid-cols-2 gap-6">
                                <Select
                                    value={form.budget}
                                    onValueChange={(value) =>
                                        handleSelect("budget", value)
                                    }
                                >
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

                                <Select
                                    value={form.service}
                                    onValueChange={(value) =>
                                        handleSelect("service", value)
                                    }
                                >
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
                                name="message"
                                placeholder="Message"
                                value={form.message}
                                onChange={handleChange}
                                className="bg-[#1A1A1A] border border-gray-700 min-h-[150px] resize-none focus:border-secondaire"
                                required
                            />

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    checked={form.terms}
                                    onChange={handleChange}
                                    className="rounded bg-[#1A1A1A] border-gray-700"
                                    required
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
                                disabled={loading}
                            >
                                {loading ? "Envoi en cours..." : "Envoyer"}
                            </Button>
                            {success && (
                                <p className="text-green-500 mt-4">{success}</p>
                            )}
                            {error && (
                                <p className="text-red-500 mt-4">{error}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
