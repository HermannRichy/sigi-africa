'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Star } from 'lucide-react'

interface TestimonialProps {
    author: string
    position: string
    content: string
    image: string
}

const Testimonial: React.FC<TestimonialProps> = ({
    author,
    position,
    content,
    image,
}) => (
    <motion.div
        className="bg-primaire/10 p-6 rounded-lg border border-primaire/50 backdrop-filter backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}>
        <div className="flex items-start gap-4 mb-4">
            <Image
                src={image}
                alt={author}
                width={48}
                height={48}
                className="rounded-full object-cover"
            />
            <div>
                <p className="text-white font-medium mb-2">{content}</p>
                <div className="flex space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className="text-yellow-500 h-4 w-4" />
                    ))}
                </div>
                <p className="text-gray-400">
                    - {author},{' '}
                    <span className="text-secondaire">{position}</span>
                </p>
            </div>
        </div>
    </motion.div>
)

const testimonials = [
    {
        author: 'Kossi Aholou',
        position: 'Directeur, École Primaire de Cotonou',
        content:
            "SIGI Africa a transformé notre façon de gérer l'immobilier scolaire. La plateforme est intuitive et nous permet de suivre efficacement nos projets de construction et rénovation.",
        image: '/images/kossi.jpg',
    },
    {
        author: 'Afiavi Dossou',
        position: 'Investisseur, Porto-Novo',
        content:
            "Grâce à SIGI Africa, j'ai pu investir sereinement dans l'immobilier depuis la France. Le suivi digital et les rapports hebdomadaires m'ont permis de rester informée à chaque étape.",
        image: '/images/afiavi.jpg',
    },
    {
        author: 'Marcel Houénou',
        position: 'Promoteur Immobilier, Parakou',
        content:
            "La qualité du service et le professionnalisme de l'équipe sont remarquables. SIGI Africa comprend vraiment les enjeux du marché immobilier béninois.",
        image: '/images/marcel.jpg',
    },
    {
        author: 'Bénédicte Agossou',
        position: 'Propriétaire, Abomey-Calavi',
        content:
            "En tant que membre de la diaspora, j'apprécie la transparence et l'efficacité de SIGI Africa. Ils ont géré la construction de ma villa de A à Z avec un excellent suivi.",
        image: '/images/benedicte.jpg',
    },
]

const Testimonials = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-5xl font-allenoire mb-4">
                        Ce que disent{' '}
                        <span className="text-secondaire">nos clients</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto md:text-lg">
                        Chez SIGI Africa, nous ne construisons pas simplement
                        des bâtiments - nous construisons votre avenir
                        immobilier au Bénin. Découvrez les témoignages de nos
                        clients satisfaits.
                    </p>
                </div>

                <div className="flex items-center gap-2 justify-center mb-12">
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map(star => (
                            <Star
                                key={star}
                                className="text-yellow-500 h-6 w-6"
                            />
                        ))}
                    </div>
                    <span className="text-gray-400 md:text-lg">
                        Note de 4.9/5 par plus de 200 clients
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { Testimonials }
