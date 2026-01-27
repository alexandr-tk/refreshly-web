import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Users, Building2, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
	const { t } = useTranslation();

	const contactCards = [
		{
			icon: Mail,
			title: t('contact.cards.email.title'),
			content: 'support@refreshly.kz',
			description: t('contact.cards.email.desc'),
			color: 'bg-blue-50 text-blue-600',
			href: 'mailto:support@refreshly.kz',
		},
		{
			icon: Phone,
			title: t('contact.cards.phone.title'),
			content: '+7 701 234 5678',
			description: t('contact.cards.phone.desc'),
			color: 'bg-green-50 text-[#415426]',
			href: 'tel:+77012345678',
		},
		{
			icon: MapPin,
			title: t('contact.cards.office.title'),
			content: t('contact.cards.office.content'),
			description: t('contact.cards.office.desc'),
			color: 'bg-orange-50 text-[#F6871F]',
			// ✅ Updated Google Maps Link
			href: 'https://www.google.com/maps/search/?api=1&query=Nauryzbay+Batyr+St+127,+Almaty,+Kazakhstan',
		},
		{
			icon: Clock,
			title: t('contact.cards.support.title'),
			content: t('contact.cards.support.content'),
			description: t('contact.cards.support.desc'),
			color: 'bg-purple-50 text-purple-600',
			href: null,
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 font-['Manrope']">
			<Navbar />

			<main className='pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden'>
				{/* Decorative Background Blob */}
				<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none' />

				<div className='container mx-auto px-4 md:px-16 relative z-10'>
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-center max-w-2xl mx-auto mb-10 md:mb-16'
					>
						<span className='inline-block py-1 px-3 rounded-full bg-[#415426]/10 text-[#415426] text-xs md:text-sm font-bold uppercase tracking-wider mb-4 md:mb-6'>
							{t('contact.badge')}
						</span>
						<h1 className='text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-gray-900'>
							{t('contact.title')}
						</h1>
						<p className='mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed'>
							{t('contact.subtitle')}
						</p>
					</motion.div>

					{/* Contact Info Cards Grid */}
					<div className='grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4'>
						{contactCards.map((card, index) => {
							const Component = card.href ? 'a' : 'div';
							return (
								<motion.div
									key={card.title}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='h-full'
								>
									<Component
										href={card.href || undefined}
										target={card.title === t('contact.cards.office.title') ? '_blank' : undefined}
										rel='noopener noreferrer'
										className={`
                                            flex flex-col h-full bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm transition-all duration-300
                                            ${card.href ? 'hover:shadow-md hover:border-gray-200 active:scale-95 cursor-pointer' : ''}
                                        `}
									>
										<div
											className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 ${card.color}`}
										>
											<card.icon size={20} className='md:w-[22px] md:h-[22px]' strokeWidth={2} />
										</div>
										<h3 className='font-bold text-gray-900 text-lg mb-1'>{card.title}</h3>
										<p className='text-gray-900 font-semibold mb-1 text-sm md:text-base break-words'>
											{card.content}
										</p>
										<p className='text-xs md:text-sm text-gray-500 mt-auto'>{card.description}</p>
									</Component>
								</motion.div>
							);
						})}
					</div>

					{/* Department Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='mt-10 md:mt-12 grid gap-4 md:gap-8 lg:grid-cols-2 items-stretch'
					>
						{/* For Users */}
						<Link
							to='/#faq'
							className='group flex flex-col h-full relative overflow-hidden bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm hover:border-[#F6871F] hover:shadow-md transition-all duration-300 cursor-pointer'
						>
							<div className='flex items-start justify-between'>
								<div className='flex items-center gap-4 mb-4 md:mb-6'>
									<div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-50 flex items-center justify-center text-[#F6871F] group-hover:bg-[#F6871F] group-hover:text-white transition-colors duration-300'>
										<Users size={24} className='md:w-7 md:h-7' strokeWidth={2} />
									</div>
									<div>
										<h3 className='text-lg md:text-xl font-bold text-gray-900'>
											{t('contact.departments.users.title')}
										</h3>
										<p className='text-gray-500 text-xs md:text-sm'>
											{t('contact.departments.users.subtitle')}
										</p>
									</div>
								</div>
							</div>

							<p className='text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base flex-grow'>
								{t('contact.departments.users.desc')}
							</p>

							<span className='inline-flex items-center gap-2 font-bold text-[#F6871F] group-hover:gap-4 transition-all text-sm md:text-base'>
								{t('contact.departments.users.link')} <ArrowRight size={18} />
							</span>
						</Link>

						{/* For Partners */}
						<Link
							to='/#partner'
							className='group flex flex-col h-full relative overflow-hidden bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm hover:border-[#415426] hover:shadow-md transition-all duration-300 cursor-pointer'
						>
							<div className='flex items-start justify-between'>
								<div className='flex items-center gap-4 mb-4 md:mb-6'>
									<div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-50 flex items-center justify-center text-[#415426] group-hover:bg-[#415426] group-hover:text-white transition-colors duration-300'>
										<Building2 size={24} className='md:w-7 md:h-7' strokeWidth={2} />
									</div>
									<div>
										<h3 className='text-lg md:text-xl font-bold text-gray-900'>
											{t('contact.departments.partners.title')}
										</h3>
										<p className='text-gray-500 text-xs md:text-sm'>
											{t('contact.departments.partners.subtitle')}
										</p>
									</div>
								</div>
							</div>

							<p className='text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base flex-grow'>
								{t('contact.departments.partners.desc')}
							</p>

							<span className='inline-flex items-center gap-2 font-bold text-[#415426] group-hover:gap-4 transition-all text-sm md:text-base'>
								{t('contact.departments.partners.link')} <ArrowRight size={18} />
							</span>
						</Link>
					</motion.div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Contact;
