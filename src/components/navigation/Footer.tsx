import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
    {
        title: "Navigation",
        links: [
            { name: "Accueil", href: "/" },
            { name: "À propos", href: "/about-us" },
            { name: "Services", href: "/services" },
            { name: "Projets", href: "/projects" },
        ],
    },
    {
        title: "Légal",
        links: [
            { name: "Mentions légales", href: "/legal" },
            { name: "Politique de confidentialité", href: "/privacy" },
            { name: "CGV", href: "/terms" },
            { name: "Cookies", href: "/cookies" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact-us" },
            { name: "FAQ", href: "/faq" },
            { name: "Support", href: "/support" },
        ],
    },
];

const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
];

export function Footer() {
    return (
        <footer className="bg-[#1A1A1A] pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                {/* Newsletter Section */}
                <div className="grid md:grid-cols-2 gap-12 pb-20 border-b border-gray-800">
                    <div>
                        <h3 className="text-2xl font-allenoire mb-4">
                            Restez informé
                        </h3>
                        <p className="text-gray-400 mb-6 md:text-lg">
                            Inscrivez-vous à notre newsletter pour recevoir nos
                            dernières actualités et offres exclusives.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            type="email"
                            placeholder="Votre adresse email"
                            className="bg-black border-gray-800"
                        />
                        <Button className="bg-secondaire text-black hover:bg-secondaire/90 whitespace-nowrap">
                            S&apos;inscrire
                        </Button>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20 border-b border-gray-800">
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-allenoire mb-8 block"
                        >
                            SIGI<span className="text-secondaire">AFRICA</span>
                        </Link>
                        <p className="text-gray-400">
                            Votre partenaire de confiance pour tous vos projets
                            immobiliers au Bénin.
                        </p>
                    </div>

                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h4 className="font-medium mb-4">{column.title}</h4>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} SIGI Africa. Tous droits
                        réservés.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
