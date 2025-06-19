"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Projets", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-allenoire">
                        SIGI<span className="text-secondaire">AFRICA</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="bg-secondaire text-black hover:bg-secondaire/90">
                            Réserver un appel
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="bg-secondaire text-black hover:bg-secondaire/90 w-full">
                                Réserver un appel
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
