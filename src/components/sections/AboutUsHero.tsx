import Image from 'next/image'

export function AboutUsHero() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl md:text-6xl font-allenoire mb-6">
                            Nous construisons{' '}
                            <span className="text-secondaire">
                                des communautés.
                            </span>
                        </h1>
                        <p className="text-gray-400 md:text-lg mb-8 max-w-2xl">
                            Avec un engagement envers la qualité, l'innovation
                            et la satisfaction client, nous nous sommes imposés
                            comme un leader incontournable dans le secteur de la
                            construction et de l'immobilier au Bénin. Notre
                            passion est de construire des maisons et des
                            communautés exceptionnelles qui dépassent les
                            attentes de nos clients.
                        </p>
                        <div className="grid grid-cols-2 gap-6 md:gap-12">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-allenoire text-secondaire mb-2">
                                    10+
                                </h3>
                                <p className="text-gray-400">
                                    Années d'expérience
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl md:text-4xl font-allenoire text-secondaire mb-2">
                                    200+
                                </h3>
                                <p className="text-gray-400">
                                    Projets réalisés
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl md:text-4xl font-allenoire text-secondaire mb-2">
                                    50+
                                </h3>
                                <p className="text-gray-400">Professionnels</p>
                            </div>
                            <div>
                                <h3 className="text-3xl md:text-4xl font-allenoire text-secondaire mb-2">
                                    98%
                                </h3>
                                <p className="text-gray-400">
                                    Clients satisfaits
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image Grid */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="relative h-[200px] md:h-[300px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/equipe.jpg"
                                    alt="Notre équipe en réunion"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/team2.jpg"
                                    alt="Design intérieur moderne"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 mt-8">
                            <div className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/about-building-1.jpg"
                                    alt="Projet immobilier"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-[200px] md:h-[300px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/chantier.jpg"
                                    alt="Équipe sur le chantier"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-[#1A1A1A] p-8 rounded-2xl">
                        <h3 className="text-xl font-allenoire mb-4">
                            Excellence Technique
                        </h3>
                        <p className="text-gray-400">
                            Notre expertise technique et notre attention aux
                            détails garantissent des constructions de haute
                            qualité qui résistent à l'épreuve du temps.
                        </p>
                    </div>
                    <div className="bg-[#1A1A1A] p-8 rounded-2xl">
                        <h3 className="text-xl font-allenoire mb-4">
                            Innovation Durable
                        </h3>
                        <p className="text-gray-400">
                            Nous intégrons des solutions innovantes et durables
                            dans chaque projet pour créer des espaces
                            respectueux de l'environnement.
                        </p>
                    </div>
                    <div className="bg-[#1A1A1A] p-8 rounded-2xl">
                        <h3 className="text-xl font-allenoire mb-4">
                            Impact Communautaire
                        </h3>
                        <p className="text-gray-400">
                            Au-delà de la construction, nous créons des espaces
                            qui favorisent le développement des communautés et
                            améliorent la qualité de vie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
