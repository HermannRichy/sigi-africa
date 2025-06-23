import Image from "next/image";

const values = [
    {
        title: "Qualité",
        description:
            "Nous nous engageons à offrir une qualité exceptionnelle dans chaque aspect de notre travail, de la conception à la construction jusqu'au service client.",
    },
    {
        title: "Innovation",
        description:
            "Nous recherchons constamment de nouvelles solutions et des approches innovantes pour améliorer nos processus, nos produits et nos services, garantissant ainsi la meilleure expérience possible à nos clients.",
    },
    {
        title: "Satisfaction Client",
        description:
            "Nous nous consacrons à dépasser les attentes de nos clients, en offrant un service personnalisé et une expérience sur mesure qui répond à leurs besoins et préférences uniques.",
    },
    {
        title: "Durabilité",
        description:
            "Nous nous engageons à construire des maisons et des communautés durables qui minimisent leur impact sur l'environnement et favorisent un avenir plus sain et plus durable.",
    },
];

export function StoryAndValues() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Content - Our Story */}
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl md:text-5xl font-allenoire mb-8">
                            Notre Histoire{" "}
                            <span className="text-secondaire">&</span> Nos
                            Valeurs
                        </h2>

                        <div className="space-y-8">
                            <p className="text-gray-400 md:text-lg">
                                SIGI Africa a été fondée en 2015 avec une vision
                                claire : révolutionner le secteur immobilier au
                                Bénin. Notre fondateur, passionné d'immobilier
                                et d'innovation, a voulu créer une entreprise
                                qui combinerait expertise locale et standards
                                internationaux.
                            </p>

                            <div className="bg-[#1A1A1A] p-6 rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/images/jean.jpg"
                                            alt="Fondateur de SIGI Africa"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <blockquote className="text-white mb-2">
                                            "Chez SIGI Africa, nous croyons que
                                            chaque projet immobilier devrait
                                            être un chef-d'œuvre - le reflet des
                                            rêves et des aspirations de nos
                                            clients. C'est pourquoi nous nous
                                            engageons à repousser les limites de
                                            ce qui est possible dans la
                                            construction et l'immobilier."
                                        </blockquote>
                                        <p className="text-gray-400">
                                            - Fondateur et PDG, SIGI Africa
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400 md:text-lg">
                                Depuis sa création, SIGI Africa s'est développée
                                pour devenir un acteur majeur du secteur,
                                réalisant plus de 200 projets et servant des
                                milliers de clients satisfaits. Aujourd'hui,
                                l'entreprise emploie une équipe de plus de 50
                                professionnels, chacun apportant un ensemble
                                unique de compétences et d'expertise.
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Our Values */}
                    <div className="lg:w-1/2">
                        <div className="space-y-6">
                            <p className="text-gray-400 md:text-lg mb-8">
                                Chez SIGI Africa, nous sommes guidés par un
                                ensemble de valeurs fondamentales qui façonnent
                                notre approche de chaque projet que nous
                                entreprenons. Ces valeurs incluent :
                            </p>

                            <div className="space-y-6">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#1A1A1A] p-6 rounded-2xl hover:bg-primaire/10 transition-colors"
                                    >
                                        <h3 className="text-xl font-allenoire mb-2 text-secondaire">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
