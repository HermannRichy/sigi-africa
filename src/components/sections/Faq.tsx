import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion";

const faqItems = [
    {
        question:
            "Comment SIGI Africa peut m'aider dans mon projet immobilier ?",
        answer: "SIGI Africa vous accompagne à chaque étape de votre projet immobilier au Bénin, que vous soyez sur place ou à l'étranger. Nous offrons des services complets : recherche de biens, évaluation, négociation, gestion des aspects juridiques, suivi de construction et gestion locative. Notre équipe s'occupe de tout, vous permettant de réaliser votre investissement en toute sérénité.",
    },
    {
        question: "Quels types de biens proposez-vous ?",
        answer: "Nous proposons une large gamme de biens immobiliers : appartements, maisons, villas, terrains constructibles, locaux commerciaux et immeubles de rapport. Tous nos biens sont soigneusement sélectionnés et vérifiés pour garantir la sécurité de votre investissement.",
    },
    {
        question: "Comment se passe le suivi à distance des projets ?",
        answer: "Nous avons mis en place un système de suivi digital performant. Vous recevez des rapports hebdomadaires détaillés avec photos et vidéos de l'avancement de votre projet. Notre équipe est disponible pour des appels vidéo réguliers et vous avez accès à un tableau de bord en ligne pour suivre toutes les étapes en temps réel.",
    },
    {
        question: "Quelles sont les garanties offertes par SIGI Africa ?",
        answer: "SIGI Africa s'engage à offrir des garanties solides : vérification approfondie des titres de propriété, conformité légale de toutes les transactions, contrats sécurisés, assurance professionnelle, et accompagnement jusqu'à la remise des clés. Nous travaillons avec des notaires et avocats agréés pour sécuriser chaque aspect de votre investissement.",
    },
    {
        question: "Quel est le budget minimum pour investir ?",
        answer: "Le budget minimum varie selon le type de projet. Nous adaptons nos propositions à différents budgets, en commençant par des investissements accessibles dans des zones à fort potentiel. Nous pouvons également structurer des plans de financement adaptés à votre situation.",
    },
    {
        question: "Combien de temps prend un projet de construction ?",
        answer: "La durée moyenne d'un projet de construction varie entre 6 et 12 mois, selon la taille et la complexité. Nous établissons un planning détaillé dès le début et nous nous engageons sur des délais précis. Notre système de suivi vous permet de rester informé de chaque étape de l'avancement.",
    },
];

export function Faq() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-5xl font-allenoire mb-4">
                        Questions{" "}
                        <span className="text-secondaire">fréquentes</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto md:text-lg">
                        Retrouvez les réponses aux questions les plus
                        fréquemment posées sur nos services immobiliers au
                        Bénin.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-4"
                    >
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-primaire/10 rounded-lg px-6 py-2 bg-[#1A1A1A]"
                            >
                                <AccordionTrigger className="text-left hover:text-secondaire transition-colors">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
