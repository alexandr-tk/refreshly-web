import { motion } from 'framer-motion';
import AppStoreBadge from '@/components/icons/AppStoreBadge';
import GooglePlayBadge from '@/components/icons/GooglePlayBadge';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
	const { t } = useTranslation();

	return (
		<section className='relative min-h-screen overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-32 bg-white'>
			{/* Background gradient blob */}
			<div className='absolute -right-20 top-0 lg:right-[-100px] lg:top-[10%] h-[400px] w-[400px] lg:h-[800px] lg:w-[800px] bg-[#415426]/5 rounded-full blur-[60px] lg:blur-[100px] pointer-events-none' />

			<div className='container relative z-10 mx-auto px-4 sm:px-8 lg:px-16 max-w-8xl'>
				<div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-24'>
					{/* Left - Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
						className='max-w-2xl mx-auto lg:mx-0 lg:col-span-7 text-center lg:text-left'
					>
						{/* Heading */}
						{/* CHANGED: Adjusted font sizes slightly for better fit with Cyrillic */}
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight text-gray-900 font-['Manrope']">
							<span className='inline-block'>{t('hero.title_1')}</span>
							<br />
							<span className='text-[#415426] inline-block'>{t('hero.title_2')}</span>
						</h1>

						<p className="mt-6 lg:mt-8 text-lg sm:text-xl leading-relaxed text-gray-600 font-['Manrope'] max-w-lg mx-auto lg:mx-0">
							{t('hero.description')}
						</p>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className='mt-8 lg:mt-12 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 '
						>
							<a
								href='https://apps.apple.com/kz/app/refreshly/id6756068724'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-transparent p-0 border-none hover:scale-105 transition-transform duration-300 rounded-[10px] h-12 sm:h-14 lg:h-16 inline-block'
								aria-label='Download on the App Store'
							>
								<AppStoreBadge className='h-full w-auto p-0.5' />
							</a>

							<a
								href='https://play.google.com/store/apps/details?id=com.refreshly'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-transparent p-0 border-none hover:scale-105 transition-transform duration-300 rounded-[10px] h-12 sm:h-14 lg:h-16 inline-block'
								aria-label='Get it on Google Play'
							>
								<GooglePlayBadge className='h-full w-auto' />
							</a>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className='mt-10 lg:mt-12 flex justify-center lg:justify-start gap-6 sm:gap-10 lg:gap-16 border-t border-gray-100 pt-8 lg:pt-10'
						>
							{/* Stat 1 */}
							<div>
								<p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#415426] font-['Manrope']">
									{t('hero.stats.curated')}
								</p>
								<p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium font-['Manrope']">
									{t('hero.stats.restaurants')}
								</p>
							</div>

							{/* Stat 2 */}
							<div>
								<p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#415426] font-['Manrope']">
									{t('hero.stats.savings_val')}
								</p>
								<p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium font-['Manrope']">
									{t('hero.stats.savings_sub')}
								</p>
							</div>

							{/* Stat 3 */}
							<div>
								<p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#415426] font-['Manrope']">
									{t('hero.stats.pickup_val')}
								</p>
								<p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium font-['Manrope']">
									{t('hero.stats.pickup_sub')}
								</p>
							</div>
						</motion.div>
					</motion.div>

					{/* Right - Phone Mockup */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='relative flex justify-center lg:justify-end mt-8 lg:mt-0 lg:col-span-5'
					>
						<div className='relative'>
							<motion.div
								animate={{ y: [0, -15, 0] }}
								transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
								className='relative z-10'
							>
								<img
									src='/RefreshlyMockup.png'
									alt='ReFreshly App Interface'
									className='w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] h-auto drop-shadow-2xl mx-auto'
								/>
							</motion.div>
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-[#415426]/20 rounded-full blur-[60px] lg:blur-[80px] -z-10' />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
