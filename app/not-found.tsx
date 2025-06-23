import { Button } from "@/src/components/ui/button";
import { Navbar } from "@/src/components/sections/Navbar";
import { Footer } from "@/src/components/sections/Footer";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
                <h1 className="text-8xl md:text-9xl font-allenoire mb-4">
                    4<span className="text-secondaire">0</span>4
                </h1>
                <h2 className="text-2xl md:text-4xl font-allenoire mb-8">
                    Page non trouvée
                </h2>
                <p className="text-gray-400 text-center max-w-lg mb-8 md:text-lg">
                    Désolé, la page que vous recherchez n&apos;existe pas ou a
                    été déplacée.
                </p>
                <Button
                    className="bg-secondaire text-black hover:bg-secondaire/90"
                    asChild
                >
                    <Link href="/">Revenir à la page d&apos;accueil</Link>
                </Button>
            </main>
            <Footer />
        </>
    );
}
