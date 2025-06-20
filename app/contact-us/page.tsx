import { Footer } from '@/src/components/sections/Footer'
import { Navbar } from '@/src/components/sections/Navbar'
import { ContactUsHero } from '@/src/components/sections/ContactUsHero'
// #14664b #94f73e
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <ContactUsHero />
            </main>
            <Footer />
        </>
    )
}
