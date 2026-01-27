import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
	const { t } = useTranslation();

	return (
		// Changed font to Manrope for consistent Russian support
		<div className="min-h-screen bg-gray-50 font-['Manrope']">
			<Navbar />

			<main className='pt-32 pb-24'>
				<div className='container mx-auto px-4 md:px-8 relative z-10'>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='mx-auto max-w-5xl bg-white p-8 md:p-16 rounded-2xl border border-gray-100 shadow-sm'
					>
						{/* Document Header */}
						<div className='border-b border-gray-100 pb-8 mb-10'>
							<h1 className='text-3xl md:text-5xl font-bold tracking-tight text-gray-900'>
								{t('privacy.title')}
							</h1>
							<p className='mt-4 text-base text-gray-500'>{t('privacy.lastUpdated')}</p>
						</div>

						{/* Document Content */}
						<div className='space-y-12 text-gray-600 leading-relaxed text-lg'>
							{/* 1. Intro */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('privacy.intro.title')}
								</h2>
								<p>{t('privacy.intro.text')}</p>
							</section>

							{/* 2. Collection */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('privacy.collection.title')}
								</h2>
								<p className='mb-4'>{t('privacy.collection.text')}</p>
								<ul className='list-disc pl-6 space-y-2 marker:text-[#415426]'>
									<li>{t('privacy.collection.list.1')}</li>
									<li>{t('privacy.collection.list.2')}</li>
									<li>{t('privacy.collection.list.3')}</li>
									<li>{t('privacy.collection.list.4')}</li>
									<li>{t('privacy.collection.list.5')}</li>
								</ul>
							</section>

							{/* 3. Data Residency */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('privacy.residency.title')}
								</h2>
								<p>
									{t('privacy.residency.text')} <strong>{t('privacy.residency.country')}</strong>.
								</p>
							</section>

							{/* 4. Usage */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('privacy.usage.title')}
								</h2>
								<p className='mb-4'>{t('privacy.usage.text')}</p>
								<ul className='list-disc pl-6 space-y-2 marker:text-[#415426]'>
									<li>{t('privacy.usage.list.1')}</li>
									<li>{t('privacy.usage.list.2')}</li>
									<li>{t('privacy.usage.list.3')}</li>
									<li>{t('privacy.usage.list.4')}</li>
									<li>{t('privacy.usage.list.5')}</li>
								</ul>
							</section>

							{/* 5. Security */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('privacy.security.title')}
								</h2>
								<p>{t('privacy.security.text')}</p>
							</section>

							{/* 6. Rights */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('privacy.rights.title')}
								</h2>
								<p>{t('privacy.rights.text')}</p>
							</section>

							{/* 7. Contact */}
							<section className='pt-8 border-t border-gray-100'>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('privacy.contact.title')}
								</h2>
								<p>{t('privacy.contact.text')}</p>
								<a
									href='mailto:support@refreshly.kz'
									className='inline-block mt-2 font-bold text-[#415426] hover:underline text-lg'
								>
									support@refreshly.kz
								</a>
							</section>
						</div>
					</motion.div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Privacy;
