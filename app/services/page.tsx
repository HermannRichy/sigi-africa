import { Footer } from "@/src/components/sections/Footer";
import { Navbar } from "@/src/components/sections/Navbar";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { Cta } from "@/src/components/sections/Cta";
import Image from "next/image";

export default function ServicesPage() {
    const newsItems = [
        {
            title: "5 façons d'augmenter la valeur de votre bien",
            category: "News Immobilier",
            date: "15 Mai 2024",
            image: "/images/news-1.jpg",
            slug: "augmenter-valeur-bien",
            description:
                "Découvrez des astuces simples et efficaces pour valoriser votre propriété avant une vente ou une location. De l'aménagement intérieur à la rénovation, maximisez le potentiel de votre bien immobilier !",
        },
        {
            title: "Comment planifier l'achat de votre maison de rêve",
            category: "Planning",
            date: "18 Jan 2024",
            image: "/images/news-2.jpg",
            slug: "planifier-achat-maison",
            description:
                "Toutes les étapes clés pour réussir l'achat de votre future maison : budget, recherche, négociation, financement et signature. Un guide pratique pour un projet immobilier sans stress !",
        },
        {
            title: "Guide d'investissement immobilier au Bénin",
            category: "Investissement",
            date: "10 Jan 2024",
            image: "/images/news-3.jpg",
            slug: "guide-investissement-benin",
            description:
                "Pourquoi et comment investir dans l'immobilier au Bénin ? Découvrez les opportunités, les zones à fort potentiel et les conseils d'experts pour sécuriser et rentabiliser votre investissement.",
        },
        {
            title: "Les tendances du marché immobilier en 2024",
            category: "Tendances",
            date: "5 Jan 2024",
            image: "/images/news-4.jpg",
            slug: "tendances-marche-2024",
            description:
                "Analyse des évolutions du marché immobilier pour l'année 2024 : prix, demandes, innovations et perspectives. Restez informé pour anticiper les meilleures opportunités !",
        },
    ];

    return (
        <>
            <Navbar />
            <main>
                {/* Section Services enrichie, uniquement pour la page not-found */}
                <section className="max-w-7xl px-4 md:px-10 mx-auto mt-20">
                    <h2 className="text-2xl text-center md:text-5xl font-allenoire mb-4">
                        Obtenez un service de qualité{" "}
                        <span className="text-secondaire">✱</span>
                    </h2>
                    <p className="text-center lg:text-lg mb-8">
                        Nous vous proposons des services de qualité pour vous
                        accompagner dans vos projets immobiliers, de la première
                        idée à la concrétisation, avec un suivi personnalisé à
                        chaque étape.
                    </p>
                    <div className="space-y-16">
                        <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto gap-4 lg:gap-8">
                            <div className="w-full md:w-2/5 lg:w-1/2">
                                <Image
                                    src="/images/service1.jfif"
                                    alt="Service1"
                                    className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                                />
                            </div>
                            <div className="w-full md:w-3/5 lg:w-1/2">
                                <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                    Accompagnement achat & vente de biens
                                    immobiliers
                                </h2>
                                <p className="lg:text-md mb-2">
                                    Nous vous guidons à chaque étape de
                                    l&apos;achat ou de la vente de votre bien
                                    immobilier. Notre équipe vous accompagne
                                    dans la recherche, l&apos;évaluation, la
                                    négociation et la finalisation de la
                                    transaction, tout en assurant la sécurité
                                    juridique et administrative de votre projet.
                                </p>
                                <p className="lg:text-md mb-2">
                                    Nous mettons à votre disposition notre
                                    réseau d&apos;experts et notre connaissance
                                    approfondie du marché local pour garantir
                                    une expérience fluide et transparente, que
                                    vous soyez primo-accédant, investisseur ou
                                    vendeur.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto gap-4 lg:gap-8">
                            <div className="w-full md:w-2/5 lg:w-1/2">
                                <Image
                                    src="/images/service2.jfif"
                                    alt="Service2"
                                    className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                                />
                            </div>
                            <div className="w-full md:w-3/5 lg:w-1/2">
                                <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                    Valorisation & Mise en Vente Optimisée
                                </h2>
                                <p className="lg:text-md mb-2">
                                    Avant la mise sur le marché, nous valorisons
                                    votre bien grâce à des conseils en home
                                    staging, des diagnostics précis et une
                                    estimation réaliste. Nous élaborons des
                                    stratégies de communication ciblées pour
                                    maximiser la visibilité de votre bien et
                                    attirer des acquéreurs qualifiés.
                                </p>
                                <p className="lg:text-md mb-2">
                                    Notre objectif : vendre rapidement et au
                                    meilleur prix, tout en vous accompagnant
                                    dans la préparation des documents et la
                                    gestion des visites.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto gap-4 lg:gap-8">
                            <div className="w-full md:w-2/5 lg:w-1/2">
                                <Image
                                    src="/images/service3.jfif"
                                    alt="Service3"
                                    className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                                />
                            </div>
                            <div className="w-full md:w-3/5 lg:w-1/2">
                                <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                    Recherche de Biens Rentables & Opportunités
                                    d&apos;Investissement
                                </h2>
                                <p className="lg:text-md mb-2">
                                    Vous souhaitez investir dans
                                    l&apos;immobilier ? Nous identifions pour
                                    vous les meilleures opportunités selon votre
                                    budget et vos objectifs : immeubles,
                                    appartements, terrains à bâtir, etc. Nous
                                    analysons le potentiel de rentabilité et
                                    vous conseillons sur les démarches à suivre.
                                </p>
                                <p className="lg:text-md mb-2">
                                    Profitez de notre expertise pour sécuriser
                                    votre investissement et bénéficier d&apos;un
                                    accompagnement sur-mesure, de la sélection
                                    du bien à la gestion locative.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto gap-4 lg:gap-8">
                            <div className="w-full md:w-2/5 lg:w-1/2">
                                <Image
                                    src="/images/service4.jfif"
                                    alt="Service4"
                                    className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                                />
                            </div>
                            <div className="w-full md:w-3/5 lg:w-1/2">
                                <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                    Montage de Projets Locatifs Clés en Main
                                </h2>
                                <p className="lg:text-md mb-2">
                                    Nous prenons en charge toutes les étapes
                                    pour transformer votre bien en source de
                                    revenus : rénovation, ameublement, mise aux
                                    normes, recherche de locataires et gestion
                                    locative si besoin.
                                </p>
                                <p className="lg:text-md mb-2">
                                    Notre équipe s&apos;occupe de tout, vous
                                    garantissant une rentabilité optimale et une
                                    tranquillité d&apos;esprit totale.
                                </p>
                            </div>
                        </article>
                        <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto gap-4 lg:gap-8">
                            <div className="w-full md:w-2/5 lg:w-1/2">
                                <Image
                                    src="/images/service5.jfif"
                                    alt="Service5"
                                    className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                                />
                            </div>
                            <div className="w-full md:w-3/5 lg:w-1/2">
                                <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                    Estimation & Analyse de Valeur Immobilière
                                </h2>
                                <p className="lg:text-md mb-2">
                                    Nos experts réalisent une estimation précise
                                    de la valeur vénale ou locative de vos
                                    biens, en s&apos;appuyant sur des outils
                                    d&apos;analyse comparative du marché et des
                                    données concrètes.
                                </p>
                                <p className="lg:text-md mb-2">
                                    Ce service est essentiel avant toute
                                    décision d&apos;achat, de vente ou
                                    d&apos;investissement, pour vous permettre
                                    de prendre les meilleures décisions en toute
                                    confiance.
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center py-12 px-4">
                    <h2 className="text-2xl md:text-4xl font-allenoire mb-4 text-center">
                        Dernières{" "}
                        <span className="text-secondaire">actualités</span>
                    </h2>
                    <p className="text-gray-400 mb-8 text-center max-w-xl">
                        Voici quelques actualités qui pourraient vous intéresser
                        :
                    </p>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
                        {newsItems.map((item, idx) => (
                            <article
                                key={idx}
                                className="bg-[#1A1A1A] rounded-lg overflow-hidden h-full flex flex-col"
                            >
                                <div className="relative h-[200px] md:h-[180px]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-2">
                                        <span className="text-sm text-gray-400">
                                            {item.category}
                                        </span>
                                        <span className="text-sm text-gray-400 mx-2">
                                            •
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            {item.date}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-1">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
                <Testimonials />
                <Cta />
            </main>
            <Footer />
        </>
    );
}
