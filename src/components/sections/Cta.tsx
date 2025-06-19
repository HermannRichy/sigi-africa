import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export function Cta() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                <div className="bg-secondaire rounded-3xl relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            className="w-full h-full"
                        >
                            <defs>
                                <pattern
                                    id="grid"
                                    width="10"
                                    height="10"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M 10 0 L 0 0 0 10"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="100%"
                                height="100%"
                                fill="url(#grid)"
                            />
                        </svg>
                    </div>

                    <div className="relative px-8 py-20 md:px-16 md:py-28 text-center">
                        <h2 className="text-3xl md:text-6xl font-allenoire text-black mb-8 max-w-4xl mx-auto">
                            Construisons Ensemble{" "}
                            <span className="inline-block">
                                Quelque Chose d'Extraordinaire
                            </span>
                        </h2>
                        <Button
                            asChild
                            size="lg"
                            className="bg-black text-white hover:bg-black/80"
                        >
                            <Link href="/contact-us">Voir nos projets</Link>
                        </Button>
                    </div>

                    {/* Decorative curves */}
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                d="M 0,100 C 20,120 50,150 100,100 S 180,80 200,100"
                                className="animate-[wave_8s_ease-in-out_infinite]"
                            />
                        </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 rotate-180">
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                d="M 0,100 C 20,120 50,150 100,100 S 180,80 200,100"
                                className="animate-[wave_10s_ease-in-out_infinite]"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
