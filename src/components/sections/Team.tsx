'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'swiper/css'
import type { Swiper as SwiperType } from 'swiper'

interface TeamMember {
    name: string
    role: string
    image: string
    description: string
}

const teamMembers: TeamMember[] = [
    {
        name: 'Jean Dupont',
        role: 'Fondateur et PDG',
        image: '/images/jean.jpg',
        description:
            "Avec plus de 20 ans d'expérience dans l'immobilier et la construction au Bénin, Jean a bâti une réputation pour son engagement inébranlable envers la qualité et l'innovation.",
    },
    {
        name: 'Marie Kouassi',
        role: 'Secrétaire Générale',
        image: '/images/secretary.jpg',
        description:
            "Pilier de l'organisation depuis sa création, Marie supervise l'ensemble des opérations administratives et assure une gestion efficace de l'entreprise.",
    },
    {
        name: 'Ahmed Diallo',
        role: 'Directeur Technique',
        image: '/images/technical.jpg',
        description:
            "Expert en construction avec une formation d'ingénieur, Ahmed dirige notre équipe technique et garantit l'excellence dans tous nos projets de construction.",
    },
    {
        name: 'Sophie Mensah',
        role: 'Directrice Commerciale',
        image: '/images/sophie.jpg',
        description:
            "Avec son expertise en immobilier et sa connaissance approfondie du marché béninois, Sophie guide nos clients vers les meilleures opportunités d'investissement.",
    },
    {
        name: 'Pascal Koffi',
        role: 'Directeur Financier',
        image: '/images/pascal.jpg',
        description:
            "Fort de 15 ans d'expérience en finance, Pascal assure la solidité financière de l'entreprise et optimise nos investissements pour une croissance durable.",
    },
    {
        name: 'Amina Sow',
        role: 'Directrice Marketing',
        image: '/images/amina.jpg',
        description:
            "Créative et stratège, Amina développe notre présence sur le marché et renforce la position de SIGI Africa comme leader de l'immobilier au Bénin.",
    },
]

const TeamMemberCard = ({ name, role, image, description }: TeamMember) => (
    <article className="bg-[#1A1A1A] rounded-lg overflow-hidden h-full p-6">
        <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority={true}
            />
        </div>
        <div>
            <h3 className="text-xl font-allenoire mb-1">{name}</h3>
            <p className="text-secondaire mb-4">{role}</p>
            <p className="text-gray-400">{description}</p>
        </div>
    </article>
)

export function Team() {
    const [currentSlide, setCurrentSlide] = useState(1)
    const totalSlides = teamMembers.length
    const swiperRef = useRef<SwiperType>()

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-secondaire"></div>
                            <h2 className="text-2xl md:text-5xl font-allenoire">
                                Notre équipe expérimentée
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-2xl md:text-lg">
                            Avec une diversité de compétences et d'expertise,
                            notre équipe est dédiée à offrir des résultats
                            exceptionnels et à dépasser les attentes de nos
                            clients.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        className="h-full"
                        onBeforeInit={swiper => {
                            swiperRef.current = swiper
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        onSlideChange={swiper =>
                            setCurrentSlide(swiper.activeIndex + 1)
                        }>
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <TeamMemberCard {...member} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-between items-center mt-8">
                        <span className="text-gray-400 text-lg font-medium">
                            {currentSlide.toString().padStart(2, '0')}/
                            {totalSlides.toString().padStart(2, '0')}
                        </span>
                        <div className="flex gap-1">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="group p-2 hover:bg-primaire/10 active:bg-primaire/10 cursor-pointer rounded-full transition-colors">
                                <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="group p-2 hover:bg-primaire/10 active:bg-primaire/10 cursor-pointer rounded-full transition-colors">
                                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
