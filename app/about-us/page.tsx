import { Cta } from "@/src/components/sections/Cta";
import { Footer } from "@/src/components/sections/Footer";
import { Navbar } from "@/src/components/sections/Navbar";
import { AboutUsHero } from "@/src/components/sections/AboutUsHero";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { StoryAndValues } from "@/src/components/sections/StoryAndValues";
import { Team } from "@/src/components/sections/Team";
// #14664b #94f73e
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <AboutUsHero />
                <StoryAndValues />
                <Testimonials />
                <Team />
                <Cta />
            </main>
            <Footer />
        </>
    );
}
