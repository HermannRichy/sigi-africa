"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

interface NewsItem {
    title: string;
    category: string;
    date: string;
    image: string;
    slug: string;
}

const newsItems: NewsItem[] = [
    {
        title: "5 façons d'augmenter la valeur de votre bien",
        category: "News Immobilier",
        date: "15 Mai 2024",
        image: "/images/news-1.jpg",
        slug: "augmenter-valeur-bien",
    },
    {
        title: "Comment planifier l'achat de votre maison de rêve",
        category: "Planning",
        date: "18 Jan 2024",
        image: "/images/news-2.jpg",
        slug: "planifier-achat-maison",
    },
    {
        title: "Guide d'investissement immobilier au Bénin",
        category: "Investissement",
        date: "10 Jan 2024",
        image: "/images/news-3.jpg",
        slug: "guide-investissement-benin",
    },
    {
        title: "Les tendances du marché immobilier en 2024",
        category: "Tendances",
        date: "5 Jan 2024",
        image: "/images/news-4.jpg",
        slug: "tendances-marche-2024",
    },
];

const NewsCard = ({ title, category, date, image, slug }: NewsItem) => (
    <article className="bg-[#1A1A1A] rounded-lg overflow-hidden h-full">
        <Link href={`/blog/${slug}`}>
            <div className="relative h-[200px] md:h-[250px]">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="p-6">
                <div className="mb-4">
                    <span className="text-sm text-gray-400">{category}</span>
                    <span className="text-sm text-gray-400 mx-2">•</span>
                    <span className="text-sm text-gray-400">{date}</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-4 hover:text-secondaire transition-colors">
                    {title}
                </h3>
                <Button
                    variant="link"
                    className="text-secondaire p-0 hover:text-white"
                >
                    Lire plus...
                </Button>
            </div>
        </Link>
    </article>
);

export function LatestNews() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = newsItems.length;
    const swiperRef = useRef<SwiperType>(null);

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-2xl md:text-5xl font-allenoire mb-4">
                            Dernières{" "}
                            <span className="text-secondaire">actualités</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl md:text-lg">
                            Nous avons bâti notre réputation en offrant des
                            résultats exceptionnels et en dépassant les attentes
                            de nos clients. De la résidence de luxe aux
                            propriétés commerciales modernes, notre équipe
                            d&apos;experts s&apos;engage à donner vie à votre
                            vision.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        asChild
                        className="hidden md:flex"
                    >
                        <Link href="/blog">Voir tous les articles</Link>
                    </Button>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        className="h-full"
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        onSlideChange={(swiper) =>
                            setCurrentSlide(swiper.activeIndex + 1)
                        }
                    >
                        {newsItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <NewsCard {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-between items-center mt-8">
                        <span className="text-gray-400 text-lg font-medium">
                            {currentSlide.toString().padStart(2, "0")}/
                            {totalSlides.toString().padStart(2, "0")}
                        </span>
                        <div className="flex gap-1">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="group p-2 hover:bg-primaire/10 active:bg-primaire/10 cursor-pointer rounded-full transition-colors"
                            >
                                <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="group p-2 hover:bg-primaire/10 active:bg-primaire/10 cursor-pointer rounded-full transition-colors"
                            >
                                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center md:hidden">
                    <Button variant="outline" asChild>
                        <Link href="/blog">Voir tous les articles</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
