import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Plus, Star } from "lucide-react";

export function About() {
    return (
        <section className="bg-primaire lg:mt-10 relative">
            <article className="px-4 py-20 lg:py-40 md:px-10 lg:px-20 mx-auto max-w-4xl text-center">
                <h2 className="flex items-center justify-center text-2xl md:text-5xl font-allenoire">
                    Nous{" "}
                    <div className="border-8 border-secondaire w-12 h-6 rounded-full mx-2 md:w-24 md:h-8"></div>{" "}
                    construisons
                </h2>
                <h3 className="text-2xl md:text-5xl font-allenoire mb-4">
                    votre avenir
                </h3>
                <p className="mb-8 md:text-lg">
                    Notre mission est de vous accompagner dans la réalisation de
                    vos projets immobiliers, que vous soyez au Bénin, en Afrique
                    ou dans la diaspora.
                </p>
                <Button className="bg-secondaire text-black mb-8" asChild>
                    <Link href="/about-us">En savoir plus sur nous...</Link>
                </Button>
                <aside className="px-14 md:flex md:items-center md:justify-center md:text-left md:gap-4">
                    <div className="flex items-center justify-center mb-4 md:mb-0 md:justify-end md:w-1/2">
                        <Image
                            src="/images/glass-testimonial-1.jpg"
                            alt="Hero Image"
                            width={50}
                            height={50}
                            className="object-cover rounded-full"
                        />
                        <Image
                            src="/images/about-testimonial-1.jpg"
                            alt="Hero Image"
                            width={50}
                            height={50}
                            className="object-cover ml-[-16] rounded-full"
                        />
                        <Image
                            src="/images/glass-testimonial-2.jpg"
                            alt="Hero Image"
                            width={50}
                            height={50}
                            className="object-cover ml-[-16] rounded-full"
                        />
                        <div className="flex items-center justify-center bg-secondaire rounded-full text-black text-lg w-[50px] h-[50px] ml-[-16]">
                            <Plus className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center md:items-start md:w-1/2">
                        <div className="flex space-x-1">
                            <Star className="text-yellow-500 h-6 w-6" />
                            <Star className="text-yellow-500 h-6 w-6" />
                            <Star className="text-yellow-500 h-6 w-6" />
                            <Star className="text-yellow-500 h-6 w-6" />
                            <Star className="text-yellow-500 h-6 w-6" />
                        </div>
                        <p className="md:text-lg">
                            Noté par des propriétaires et acheteurs au Bénin.
                        </p>
                    </div>
                </aside>
            </article>
            <Image
                src="/images/about-img-2.jpg"
                alt="About Image"
                width={250}
                height={300}
                className="object-cover rounded-2xl opacity-60 absolute top-20 right-20 rotate-[-12deg] hidden lg:block"
            />
            <Image
                src="/images/about-img-1.jpg"
                alt="About Image"
                width={250}
                height={300}
                className="object-cover rounded-2xl opacity-60 absolute top-1/3 left-20 rotate-12 hidden lg:block"
            />
        </section>
    );
}
