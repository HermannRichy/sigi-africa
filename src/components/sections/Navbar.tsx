import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/src/components/ui/drawer";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AlignRight } from "lucide-react";

export function Navbar() {
    return (
        <>
            <header className="flex items-center justify-between p-4 border-b border-primaire/50 lg:hidden">
                <div className="flex items-center gap-2">
                    <div className="p-1 bg-white rounded-md">
                        <Image
                            src="/images/logo.png"
                            alt="Logo SIGI AFRICA"
                            width={60}
                            height={20}
                        />
                    </div>
                    <h1 className="font-allenoire text-2xl">SIGI AFRICA</h1>
                </div>
                <nav>
                    <Drawer>
                        <DrawerTrigger>
                            <AlignRight />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle className="flex flex-col items-center gap-4">
                                    <Link href="/">Accueil</Link>
                                    <Link href="/about-us">A propos</Link>
                                    <Link href="/services">Nos services</Link>
                                    <Link href="/contact-us">
                                        Contactez-nous
                                    </Link>
                                </DrawerTitle>
                            </DrawerHeader>
                        </DrawerContent>
                    </Drawer>
                </nav>
            </header>
            <header className="hidden lg:flex items-center justify-center p-4 border-b border-primaire/50 z-999">
                <div className="flex items-center justify-between w-full max-w-6xl">
                    <div className="flex items-center gap-2">
                        <div className="p-1 bg-white rounded-md">
                            <Image
                                src="/images/logo.png"
                                alt="Logo SIGI AFRICA"
                                width={60}
                                height={20}
                            />
                        </div>
                        <h1 className="font-allenoire text-2xl">SIGI AFRICA</h1>
                    </div>
                    <nav className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="hover:border-b border-secondaire hover:text-secondaire"
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/about-us"
                            className="hover:border-b border-secondaire hover:text-secondaire"
                        >
                            A propos
                        </Link>
                        <Link
                            href="/services"
                            className="hover:border-b border-secondaire hover:text-secondaire"
                        >
                            Nos services
                        </Link>
                    </nav>
                    <Button className="bg-primaire" asChild>
                        <Link href="/contact-us">Contactez-nous</Link>
                    </Button>
                </div>
            </header>
        </>
    );
}
