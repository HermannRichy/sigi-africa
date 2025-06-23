import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/src/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export function Services() {
    return (
        <section className="max-w-7xl px-4 md:px-10 mx-auto mt-20">
            <h2 className="text-2xl text-center md:text-5xl font-allenoire mb-4">
                Obtenez un service de qualité{" "}
                <span className="text-secondaire">✱</span>
            </h2>
            <p className="text-center lg:text-lg mb-8">
                Nous vous proposons des services de qualité pour vous
                accompagner dans vos projets immobiliers.
            </p>
            <Tabs defaultValue="transaction" className="w-full">
                <TabsList className="flex flex-wrap justify-center items-center gap-2 mb-24 md:mb-10 mx-auto">
                    <TabsTrigger
                        className="cursor-pointer rounded-md border border-secondaire inline-block w-fit"
                        value="transaction"
                    >
                        Transaction & Conseil
                    </TabsTrigger>
                    <TabsTrigger
                        className="cursor-pointer rounded-md border border-secondaire inline-block w-fit"
                        value="developpement"
                    >
                        Développement & Construction
                    </TabsTrigger>
                    <TabsTrigger
                        className="cursor-pointer rounded-md border border-secondaire inline-block w-fit"
                        value="gestion"
                    >
                        Gestion & Valorisation
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="transaction">
                    <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto mb-10 gap-4 lg:gap-8">
                        <div className="w-full md:w-2/5 lg:w-1/2">
                            <Image
                                src="/images/service1.jfif"
                                alt="Service1"
                                width={300}
                                height={200}
                                className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                            />
                        </div>
                        <div className="w-full md:w-3/5 lg:w-1/2">
                            <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                Accompagnement achat & vente de biens
                                immobiliers
                            </h2>
                            <p className="lg:text-md mb-4">
                                Nous guidons les particuliers et investisseurs
                                tout au long du processus d&apos;achat ou de
                                vente de biens immobiliers. Grâce à notre
                                parfaite connaissance du marché, nous facilitons
                                chaque transaction en assurant une évaluation
                                juste, une visibilité optimale et une
                                négociation efficace.
                            </p>
                            <Button asChild variant={"link"}>
                                <Link className="underline" href="/services">
                                    En savoir plus
                                </Link>
                            </Button>
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto mb-10 gap-4 lg:gap-8">
                        <div className="w-full md:w-2/5 lg:w-1/2">
                            <Image
                                src="/images/service2.jfif"
                                alt="Service2"
                                width={300}
                                height={200}
                                className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                            />
                        </div>
                        <div className="w-full md:w-3/5 lg:w-1/2">
                            <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                Valorisation & Mise en Vente Optimisée
                            </h2>
                            <p className="lg:text-md mb-4">
                                Avant la mise sur le marché, nous vous
                                accompagnons dans la valorisation de votre bien
                                (home staging, diagnostics, estimation précise),
                                pour vendre plus vite et au meilleur prix. Nous
                                mettons également en place des campagnes de
                                visibilité ciblées.
                            </p>
                            <Button asChild variant={"link"}>
                                <Link className="underline" href="/services">
                                    En savoir plus
                                </Link>
                            </Button>
                        </div>
                    </article>
                </TabsContent>
                <TabsContent value="developpement">
                    <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto mb-10 gap-4 lg:gap-8">
                        <div className="w-full md:w-2/5 lg:w-1/2">
                            <Image
                                src="/images/service3.jfif"
                                alt="Service3"
                                width={300}
                                height={200}
                                className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                            />
                        </div>
                        <div className="w-full md:w-3/5 lg:w-1/2">
                            <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                Recherche de Biens Rentables & Opportunités
                                d&apos;Investissement
                            </h2>
                            <p className="lg:text-md mb-4">
                                Vous cherchez à investir intelligemment ? Nous
                                identifions pour vous des biens à fort potentiel
                                de rendement (immeubles, appartements, terrains
                                à construire...) selon votre budget, vos
                                objectifs et votre profil d&apos;investisseur.
                            </p>
                            <Button asChild variant={"link"}>
                                <Link className="underline" href="/services">
                                    En savoir plus
                                </Link>
                            </Button>
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto mb-10 gap-4 lg:gap-8">
                        <div className="w-full md:w-2/5 lg:w-1/2">
                            <Image
                                src="/images/service4.jfif"
                                alt="Service4"
                                width={300}
                                height={200}
                                className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                            />
                        </div>
                        <div className="w-full md:w-3/5 lg:w-1/2">
                            <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                Montage de Projets Locatifs Clés en Main
                            </h2>
                            <p className="lg:text-md mb-4">
                                De l&apos;acquisition à la mise en location,
                                nous prenons en charge toutes les étapes pour
                                transformer votre bien en source de revenus :
                                rénovation, ameublement, mise aux normes,
                                recherche de locataires, gestion locative
                                incluse si besoin.
                            </p>
                            <Button asChild variant={"link"}>
                                <Link className="underline" href="/services">
                                    En savoir plus
                                </Link>
                            </Button>
                        </div>
                    </article>
                </TabsContent>
                <TabsContent value="gestion">
                    <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto mb-10 gap-4 lg:gap-8">
                        <div className="w-full md:w-2/5 lg:w-1/2">
                            <Image
                                src="/images/service5.jfif"
                                alt="Service5"
                                width={300}
                                height={200}
                                className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                            />
                        </div>
                        <div className="w-full md:w-3/5 lg:w-1/2">
                            <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                Accompagnement achat & vente de biens
                                immobiliers
                            </h2>
                            <p className="lg:text-md mb-4">
                                Nous guidons les particuliers et investisseurs
                                tout au long du processus d&apos;achat ou de
                                vente de biens immobiliers. Grâce à notre
                                parfaite connaissance du marché, nous facilitons
                                chaque transaction en assurant une évaluation
                                juste, une visibilité optimale et une
                                négociation efficace.
                            </p>
                            <Button asChild variant={"link"}>
                                <Link className="underline" href="/services">
                                    En savoir plus
                                </Link>
                            </Button>
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row md:items-center lg:w-4/5 mx-auto mb-10 gap-4 lg:gap-8">
                        <div className="w-full md:w-2/5 lg:w-1/2">
                            <Image
                                src="/images/service5.jfif"
                                alt="Service5"
                                width={300}
                                height={200}
                                className="object-cover rounded-2xl w-full h-80 mb-4 md:mb-0"
                            />
                        </div>
                        <div className="w-full md:w-3/5 lg:w-1/2">
                            <h2 className="text-xl md:text-2xl font-allenoire mb-4">
                                Estimation & Analyse de Valeur Immobilière
                            </h2>
                            <p className="lg:text-md mb-4">
                                Nos experts réalisent une estimation précise de
                                la valeur vénale ou locative de vos biens, en
                                s&apos;appuyant sur des outils d&apos;analyse
                                comparative du marché et des données concrètes.
                                Un service essentiel avant toute décision
                                d&apos;achat, de vente ou d&apos;investissement.
                            </p>
                            <Button asChild variant={"link"}>
                                <Link className="underline" href="/services">
                                    En savoir plus
                                </Link>
                            </Button>
                        </div>
                    </article>
                </TabsContent>
            </Tabs>
        </section>
    );
}
