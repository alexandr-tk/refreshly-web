import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LivePreview } from '@/components/LivePreview';
import { ComparisonTable } from '@/components/ComparisonTable';
import { PartnerSection } from '@/components/PartnerSection';
import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/FAQ';
import { HowItWorks } from '@/components/HowItWorks';

const Index = () => {
	return (
		<div className='min-h-screen'>
			<Navbar />
			<main>
				<Hero />
				<LivePreview />
				<HowItWorks />
				<ComparisonTable />
				<FAQ />
				<PartnerSection />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
