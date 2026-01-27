import { motion } from 'framer-motion';
import { Check, X, DollarSign, Clock, Leaf, Bike } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { useTranslation } from 'react-i18next';

export const ComparisonTable = () => {
	const { t } = useTranslation();

	const comparisons = [
		{
			id: 'price',
			icon: DollarSign,
			feature: t('comparison.rows.price.feature'),
			description: t('comparison.rows.price.desc'),
			refreshly: t('comparison.rows.price.refreshly'),
			others: t('comparison.rows.price.others'),
		},
		{
			id: 'speed',
			icon: Clock,
			feature: t('comparison.rows.speed.feature'),
			description: t('comparison.rows.speed.desc'),
			refreshly: t('comparison.rows.speed.refreshly'),
			others: t('comparison.rows.speed.others'),
		},
		{
			id: 'impact',
			icon: Leaf,
			feature: t('comparison.rows.impact.feature'),
			description: t('comparison.rows.impact.desc'),
			refreshly: t('comparison.rows.impact.refreshly'),
			others: t('comparison.rows.impact.others'),
		},
		{
			id: 'delivery',
			icon: Bike,
			feature: t('comparison.rows.delivery.feature'),
			description: t('comparison.rows.delivery.desc'),
			refreshly: t('comparison.rows.delivery.refreshly'),
			others: t('comparison.rows.delivery.others'),
		},
	];

	return (
		<section className='py-24 bg-gray-50 relative overflow-hidden'>
			{/* Decorative background blob */}
			<div className='absolute left-[-10%] top-[20%] h-[600px] w-[600px] bg-[#415426]/5 rounded-full blur-[120px] pointer-events-none' />

			<div className='container mx-auto px-4 md:px-8 relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center max-w-3xl mx-auto mb-16'
				>
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 font-['Manrope']">
						{t('comparison.title')}
					</h2>
					<p className="mt-4 text-lg text-gray-600 font-['Manrope']">{t('comparison.subtitle')}</p>
				</motion.div>

				{/* Table Card */}
				<div className='max-w-5xl mx-auto'>
					<div className='bg-white rounded-[32px] border border-gray-100 shadow-2xl overflow-hidden'>
						{/* Desktop Headers */}
						<div className='hidden md:grid grid-cols-12 border-b border-gray-100'>
							<div className="col-span-5 py-6 px-8 text-xs font-extrabold text-gray-400 uppercase tracking-widest font-['Manrope'] flex items-center bg-gray-50/50">
								{t('comparison.headers.feature')}
							</div>

							{/* Standard App Header */}
							<div className="col-span-3 py-6 px-6 text-center text-xs font-extrabold text-gray-400 uppercase tracking-widest font-['Manrope'] flex items-center justify-center bg-gray-50/50 border-l border-gray-100">
								{t('comparison.headers.standard')}
							</div>

							{/* ReFreshly Header */}
							<div className='col-span-4 py-6 px-6 flex items-center justify-center bg-[#415426]/5 border-t-4 border-t-[#415426] relative'>
								<div className='w-28 text-[#415426]'>
									<Logo />
								</div>
							</div>
						</div>

						{/* Rows */}
						<div className='divide-y divide-gray-100'>
							{comparisons.map((item, index) => (
								<motion.div
									key={item.id}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									className='relative md:grid md:grid-cols-12 md:items-stretch group'
								>
									{/* Feature Column */}
									<div className='col-span-5 p-6 md:px-8 flex items-center gap-5'>
										<div className='flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#415426]/10 text-[#415426]'>
											<item.icon size={22} strokeWidth={2} />
										</div>
										<div>
											<h3 className="text-lg font-bold text-gray-900 font-['Manrope']">
												{item.feature}
											</h3>
											<p className="text-sm text-gray-500 font-medium font-['Manrope']">
												{item.description}
											</p>
										</div>
									</div>

									{/* MOBILE VIEW: Split Grid */}
									<div className='grid grid-cols-2 gap-4 px-6 pb-6 md:hidden'>
										{/* Box 1: Others */}
										<div className='bg-gray-50 rounded-2xl p-4 flex flex-col justify-center items-center text-center'>
											<p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2'>
												{t('comparison.headers.standard')}
											</p>
											<span className='text-sm font-semibold text-gray-500 line-through decoration-gray-400 decoration-2'>
												{item.others}
											</span>
										</div>

										{/* Box 2: ReFreshly */}
										<div className='bg-[#415426]/10 rounded-2xl p-4 flex flex-col justify-center items-center text-center border border-[#415426]/20'>
											<div className='mb-2 w-16 text-[#415426] opacity-80'>
												<Logo />
											</div>
											<span className="text-sm font-extrabold text-[#415426] font-['Manrope']">
												{item.refreshly}
											</span>
										</div>
									</div>

									{/* DESKTOP VIEW: Comparison Columns */}
									<div className='hidden md:contents'>
										{/* Standard App Column */}
										<div className='col-span-3 py-6 px-6 flex items-center justify-center border-l border-gray-100 bg-gray-50/30'>
											<div className='flex items-center gap-2'>
												<X size={18} className='text-gray-400' strokeWidth={3} />
												<span className="text-base font-semibold text-gray-500 line-through decoration-gray-300 decoration-2 font-['Manrope']">
													{item.others}
												</span>
											</div>
										</div>

										{/* ReFreshly Column - FIXED SIZING & ALIGNMENT */}
										<div className='col-span-4 py-6 px-6 flex items-center justify-center bg-[#415426]/5 relative'>
											<div className='absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#415426]/10 to-transparent' />

											<div className='flex items-center gap-3'>
												{/* Smaller, cleaner checkbox */}
												<div className='flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#415426] text-white shadow-md shadow-[#415426]/20'>
													<Check size={12} strokeWidth={3} />
												</div>
												{/* Text reduced from text-xl to text-lg, weight reduced to bold */}
												<span className="text-lg font-bold text-[#415426] font-['Manrope'] leading-none pt-0.5">
													{item.refreshly}
												</span>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
