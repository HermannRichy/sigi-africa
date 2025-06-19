import { About } from "@/src/components/sections/About";
import { Hero } from "@/src/components/sections/Hero";
import { Navbar } from "@/src/components/sections/Navbar";
import { Services } from "@/src/components/sections/Services";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { LatestNews } from "@/src/components/sections/LatestNews";
import { Faq } from "@/src/components/sections/Faq";
import { Cta } from "@/src/components/sections/Cta";
import { Footer } from "@/src/components/sections/Footer";
// #14664b #94f73e
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <LatestNews />
                <Faq />
                <Cta />
            </main>
            <Footer />
        </>
    );
}
