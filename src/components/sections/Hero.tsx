import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export function Hero() {
    return (
        <section
            className="flex flex-col items-center justify-between w-full lg:h-[90vh] max-w-7xl px-4 md:px-10 mx-auto 
        mt-10 lg:mt-0 lg:flex-row"
        >
            <div className="lg:w-1/2">
                <h2 className="text-2xl md:text-5xl font-allenoire mb-4">
                    Achat, vente, gestion de biens immobiliers, ça se passe à{" "}
                    <span className="text-secondaire">SIGI AFRICA !</span>
                </h2>
                <p className="mb-6 md:text-lg">
                    Votre nouvelle agence immobilière qui concrétise vos
                    projets, que vous soyez au Bénin, en Afrique ou dans la
                    diaspora.
                </p>
                <div className="flex items-center gap-2">
                    <Button variant={"outline"} asChild>
                        <Link href="/contact-us">Reservez un call</Link>
                    </Button>
                    <Button className="bg-primaire" asChild>
                        <Link href="/services">Nos services</Link>
                    </Button>
                </div>
            </div>
            <div className="lg:w-1/2 relative overflow-y-hidden">
                <Image
                    src="/images/hero-img-2.png"
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full lg:h-[650px]"
                />
                <aside
                    className="absolute top-10 right-5 lg:top-32 flex items-center justify-between w-4/5 md:w-1/2 p-2 gap-4 border rounded-lg shadow-md 
                bg-clip-padding backdrop-filter backdrop-blur-sm bg-primaire/10 border-primaire/50"
                >
                    <Image
                        src="/images/glass-testimonial-2.jpg"
                        alt="Hero testimonial"
                        width={40}
                        height={40}
                        className="object-cover h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex space-x-1">
                            <Star className="text-yellow-500 h-4 w-4" />
                            <Star className="text-yellow-500 h-4 w-4" />
                            <Star className="text-yellow-500 h-4 w-4" />
                            <Star className="text-yellow-500 h-4 w-4" />
                            <Star className="text-yellow-500 h-4 w-4" />
                        </div>
                        <p className="text-xs text-white">
                            "Un suivi de votre projet depuis votre position
                            grâce à des rapports hebdomadaires et digitaux."
                        </p>
                    </div>
                </aside>
                <aside
                    className="absolute bottom-10 flex items-center justify-between w-4/5 md:w-1/2 p-2 gap-4 border rounded-lg shadow-md 
                bg-clip-padding backdrop-filter backdrop-blur-sm bg-primaire/10 border-primaire/50"
                >
                    <Image
                        src="/images/glass-testimonial-1.jpg"
                        alt="Hero testimonial"
                        width={40}
                        height={40}
                        className="object-cover h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex space-x-1">
                            <Star className="text-yellow-500 h-4 w-4" />
                            <Star className="text-yellow-500 h-4 w-4" />
                            <Star className="text-yellow-500 h-4 w-4" />
                            <Star className="text-yellow-500 h-4 w-4" />
                            <Star className="text-yellow-500 h-4 w-4" />
                        </div>
                        <p className="text-xs text-white">
                            "Une équipe professionnelle et à l&apos;écoute. Ils
                            ont su répondre à toutes mes attentes."
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
}
