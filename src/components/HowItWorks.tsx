/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { Search, CreditCard, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Define static data (Icons/Colors) outside the component
const stepConfig = [
	{
		id: 1,
		icon: Search,
		color: 'bg-blue-50 text-blue-600',
	},
	{
		id: 2,
		icon: CreditCard,
		color: 'bg-orange-50 text-[#F6871F]',
	},
	{
		id: 3,
		icon: ShoppingBag,
		color: 'bg-green-50 text-[#415426]',
	},
];

export const HowItWorks = () => {
	const { t } = useTranslation();

	return (
		<section id='how-it-works' className='py-24 bg-white relative overflow-hidden'>
			<div className='container mx-auto px-4 md:px-8 relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center max-w-3xl mx-auto mb-20'
				>
					<span className="inline-block py-1 px-3 rounded-full bg-[#415426]/10 text-[#415426] text-sm font-bold uppercase tracking-wider mb-6 font-['Manrope']">
						{t('howItWorks.badge')}
					</span>
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 font-['Manrope']">
						{t('howItWorks.title')}
					</h2>
					<p className="mt-4 text-lg text-gray-600 font-['Manrope']">{t('howItWorks.subtitle')}</p>
				</motion.div>

				{/* Steps Grid */}
				<div className='grid md:grid-cols-3 gap-12 relative'>
					{/* Connector Line (Desktop Only) */}
					<div className='hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10'></div>

					{stepConfig.map((step, index) => (
						<motion.div
							key={step.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className='flex flex-col items-center text-center relative'
						>
							{/* Icon Circle */}
							<div
								className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-8 relative shadow-sm border border-white`}
							>
								<step.icon size={40} strokeWidth={1.5} />

								{/* Step Number Badge */}
								<div className='absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm'>
									<span className="text-sm font-bold text-gray-900 font-['Manrope']">{step.id}</span>
								</div>
							</div>

							{/* Title & Description pulled via i18n keys */}
							{/* Note: We cast step.id as 1 | 2 | 3 to match the structure if using TS strictly, or just use string interpolation */}
							<h3 className="text-2xl font-bold text-gray-900 mb-3 font-['Manrope']">
								{t(`howItWorks.steps.${step.id}.title` as any)}
							</h3>
							<p className="text-gray-600 leading-relaxed font-['Manrope'] max-w-xs">
								{t(`howItWorks.steps.${step.id}.description` as any)}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
