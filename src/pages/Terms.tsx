import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const Terms = () => {
	const { t } = useTranslation();

	return (
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
								{t('terms.title')}
							</h1>
							<p className='mt-4 text-base text-gray-500'>{t('terms.lastUpdated')}</p>
						</div>

						{/* Document Content */}
						<div className='space-y-12 text-gray-600 leading-relaxed text-lg'>
							{/* 1. Acceptance */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.1.title')}
								</h2>
								<p>{t('terms.sections.1.text')}</p>
							</section>

							{/* 2. Description */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.2.title')}
								</h2>
								<p>{t('terms.sections.2.text')}</p>
							</section>

							{/* 3. User Accounts */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.3.title')}
								</h2>
								<p>{t('terms.sections.3.text')}</p>
							</section>

							{/* 4. Payments */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.4.title')}
								</h2>
								<p className='mb-4'>
									{t('terms.sections.4.text')} <strong>{t('terms.sections.4.currency')}</strong>.
								</p>
								<ul className='list-disc pl-6 space-y-2 marker:text-[#415426]'>
									<li>{t('terms.sections.4.list.1')}</li>
									<li>{t('terms.sections.4.list.2')}</li>
									<li>{t('terms.sections.4.list.3')}</li>
								</ul>
							</section>

							{/* 5. Reservations */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.5.title')}
								</h2>
								<p className='mb-4'>{t('terms.sections.5.text')}</p>
								<ul className='list-disc pl-6 space-y-2 marker:text-[#415426]'>
									<li>{t('terms.sections.5.list.1')}</li>
									<li>{t('terms.sections.5.list.2')}</li>
									<li>{t('terms.sections.5.list.3')}</li>
								</ul>
							</section>

							{/* 6. Delivery */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.6.title')}
								</h2>
								<p className='mb-4'>
									<strong>{t('terms.sections.6.text')}</strong> {t('terms.sections.6.subtext')}
								</p>
								<ul className='list-disc pl-6 space-y-2 marker:text-[#415426]'>
									<li>{t('terms.sections.6.list.1')}</li>
									<li>{t('terms.sections.6.list.2')}</li>
									<li>{t('terms.sections.6.list.3')}</li>
								</ul>
							</section>

							{/* 7. Cancellation */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.7.title')}
								</h2>
								<p>{t('terms.sections.7.text')}</p>
							</section>

							{/* 8. IP */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.8.title')}
								</h2>
								<p>{t('terms.sections.8.text')}</p>
							</section>

							{/* 9. Liability */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.9.title')}
								</h2>
								<p>{t('terms.sections.9.text')}</p>
							</section>

							{/* 10. Law */}
							<section>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.10.title')}
								</h2>
								<p>{t('terms.sections.10.text')}</p>
							</section>

							{/* 11. Contact */}
							<section className='pt-8 border-t border-gray-100'>
								<h2 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
									{t('terms.sections.11.title')}
								</h2>
								<p>{t('terms.sections.11.text')}</p>
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

export default Terms;
