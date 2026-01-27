import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FAQ = () => {
	const { t } = useTranslation();
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	// Define FAQs dynamically using translations
	const faqs = [
		{
			question: t('faq.questions.safety.q'),
			answer: t('faq.questions.safety.a'),
		},
		{
			question: t('faq.questions.cheap.q'),
			answer: t('faq.questions.cheap.a'),
		},
		{
			question: t('faq.questions.delivery.q'),
			answer: t('faq.questions.delivery.a'),
		},
		{
			question: t('faq.questions.mystery.q'),
			answer: t('faq.questions.mystery.a'),
		},
		{
			question: t('faq.questions.pickup.q'),
			answer: t('faq.questions.pickup.a'),
		},
		{
			question: t('faq.questions.dietary.q'),
			answer: t('faq.questions.dietary.a'),
		},
	];

	return (
		<section id='faq' className='py-24 bg-white'>
			<div className='container mx-auto px-4 md:px-16 max-w-6xl'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16 max-w-3xl mx-auto'
				>
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 font-['Manrope']">
						{t('faq.title')}
					</h2>
					<p className="mt-4 text-lg text-gray-600 font-['Manrope']">{t('faq.subtitle')}</p>
				</motion.div>

				{/* FAQ Accordion */}
				<div className='space-y-4'>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className={`
                border rounded-2xl transition-all duration-300 overflow-hidden
                ${activeIndex === index ? 'border-[#415426]/30 bg-gray-50/50 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}
              `}
						>
							<button
								onClick={() => toggleFAQ(index)}
								className='flex items-center justify-between w-full p-6 md:p-8 text-left cursor-pointer focus:outline-none'
							>
								<span
									className={`text-lg md:text-xl font-bold font-['Manrope'] ${activeIndex === index ? 'text-[#415426]' : 'text-gray-900'}`}
								>
									{faq.question}
								</span>
								<motion.div
									animate={{ rotate: activeIndex === index ? 180 : 0 }}
									transition={{ duration: 0.3 }}
									className={`flex-shrink-0 ml-4 ${activeIndex === index ? 'text-[#415426]' : 'text-gray-400'}`}
								>
									<ChevronDown size={24} strokeWidth={2.5} />
								</motion.div>
							</button>

							<AnimatePresence>
								{activeIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: 'easeInOut' }}
									>
										<div className="px-6 md:px-8 pb-8 text-base md:text-lg leading-relaxed text-gray-600 font-['Manrope'] border-t border-gray-100/50 pt-4 max-w-4xl">
											{faq.answer}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className='mt-16 text-center'
				>
					<p className="text-gray-500 font-['Manrope'] text-lg">
						{t('faq.footer.text')}{' '}
						<a href='mailto:support@refreshly.kz' className='font-bold text-[#415426] hover:underline'>
							{t('faq.footer.link')}
						</a>
					</p>
				</motion.div>
			</div>
		</section>
	);
};
