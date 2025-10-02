import TopNav from '@/app/ui/landing-page/topnav';
import LandingHero from '@/app/ui/landing-page/landing-hero';
import Cards from '../ui/landing-page/cards';
import CRM from '../ui/landing-page/crm';
import Intake from '../ui/landing-page/intake';
import Blog from '../ui/landing-page/blog';
import Form from '../ui/landing-page/Form';
import Footer from '../ui/landing-page/footer';

export default function Page() {
    return (
        <main>
            <div className="flex flex-col self-center">
                <TopNav />
                <LandingHero />
                <Cards />
                <CRM />
                <Intake />
                <Blog />
                <Form></Form>
                <Footer />
            </div>
        </main>
    )
}