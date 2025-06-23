import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const navigationLinks = {
    Navigation: [
        { name: "Accueil", href: "/" },
        { name: "Propriétés", href: "/properties" },
        { name: "Témoignages", href: "/#testimonials" },
        { name: "FAQ", href: "/#faq" },
        { name: "Conditions d'utilisation", href: "/terms" },
    ],
    "À propos": [
        { name: "Notre histoire", href: "/about-us" },
        { name: "Nos valeurs", href: "/about-us#values" },
        { name: "Notre équipe", href: "/about-us#team" },
    ],
    Propriétés: [
        { name: "Portfolio", href: "/properties" },
        { name: "Catégories", href: "/properties/categories" },
    ],
    Services: [
        { name: "Construction résidentielle", href: "/services#residential" },
        { name: "Construction commerciale", href: "/services#commercial" },
        { name: "Gestion immobilière", href: "/services#management" },
        { name: "Services de développement", href: "/services#development" },
    ],
    Contact: [
        { name: "Formulaire de contact", href: "/contact-us" },
        { name: "Nos bureaux", href: "/contact-us#offices" },
    ],
};

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export function Footer() {
    return (
        <footer className="border-t border-primaire/50 bg-black">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                {/* Newsletter Section */}
                <div className="py-12 border-b border-primaire/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-1 bg-white rounded-md">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo SIGI AFRICA"
                                    width={60}
                                    height={20}
                                />
                            </div>
                            <h3 className="font-allenoire text-2xl">
                                SIGI AFRICA
                            </h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Entrez votre email"
                                className="px-4 py-2 bg-[#1A1A1A] border border-primaire/50 rounded-lg focus:outline-none focus:border-secondaire"
                            />
                            <button className="px-4 py-2 bg-secondaire text-black rounded-lg hover:bg-secondaire/90 transition-colors">
                                S&apos;abonner
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
                    {Object.entries(navigationLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-white font-medium mb-4">
                                {title}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-secondaire transition-colors"
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
                <div className="py-8 border-t border-primaire/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2025 SIGI Africa. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="text-gray-400 hover:text-secondaire transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
