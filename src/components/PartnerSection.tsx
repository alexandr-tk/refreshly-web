import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Building2, User, Phone, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const PartnerSection = () => {
	const { t } = useTranslation();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const [formData, setFormData] = useState({
		restaurantName: '',
		ownerName: '',
		phone: '',
		email: '',
	});

	const benefits = [t('partner.benefits.1'), t('partner.benefits.2'), t('partner.benefits.3')];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		const templateParams = {
			restaurant_name: formData.restaurantName,
			owner_name: formData.ownerName,
			phone: formData.phone,
			email: formData.email,
		};

		emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
			(response) => {
				setIsSubmitted(true);
				setIsLoading(false);
				setFormData({ restaurantName: '', ownerName: '', phone: '', email: '' });
			},
			(err) => {
				console.error('FAILED...', err);
				setError(t('partner.form.error'));
				setIsLoading(false);
			},
		);
	};

	return (
		<section id='partner' className='relative py-16 lg:py-24 bg-gray-50 overflow-hidden border-t border-gray-100'>
			{/* Background Decor */}
			<div className='absolute right-0 bottom-0 h-[600px] w-[600px] bg-[#415426]/5 rounded-full blur-[120px] pointer-events-none' />

			<div className='container mx-auto px-4 md:px-16 relative z-10'>
				<div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-24'>
					{/* Left Side (Text) */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-center lg:text-left'
					>
						<span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-[#415426] text-xs md:text-sm font-bold uppercase tracking-wider mb-6 font-['Manrope'] shadow-sm mx-auto lg:mx-0">
							{t('partner.badge')}
						</span>

						<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl font-['Manrope'] leading-tight">
							{t('partner.title_1')}
							<br />
							<span className='text-[#415426]'>{t('partner.title_2')}</span>
						</h2>

						<p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 font-['Manrope'] leading-relaxed max-w-lg mx-auto lg:mx-0">
							{t('partner.description')}
						</p>

						<div className='mt-8 md:mt-10'>
							<div className='inline-flex flex-col gap-4 sm:gap-6 text-left mx-auto lg:mx-0'>
								{benefits.map((benefit, index) => (
									<motion.div
										key={benefit}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										className='flex items-center gap-4 group cursor-default'
									>
										<div className='flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#415426] text-white shadow-md shadow-[#415426]/20 transition-transform duration-300 group-hover:scale-110'>
											<Check size={18} strokeWidth={3} />
										</div>
										<span className="relative text-base md:text-lg font-medium text-gray-700 font-['Manrope']">
											{benefit}
											<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#415426] transition-all duration-300 group-hover:w-full'></span>
										</span>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Right Side (Form) */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='w-full'
					>
						<div className='relative rounded-3xl lg:rounded-[32px] bg-white border border-gray-100 p-6 md:p-8 lg:p-12 shadow-xl shadow-gray-200/50'>
							{!isSubmitted ? (
								<>
									<div className='text-center lg:text-left'>
										<h3 className="text-2xl font-bold tracking-tight text-gray-900 font-['Manrope']">
											{t('partner.form.title')}
										</h3>
										<p className="mt-2 text-sm md:text-base text-gray-500 font-['Manrope']">
											{t('partner.form.subtitle')}
										</p>
									</div>

									<form onSubmit={handleSubmit} className='mt-8 space-y-4 md:space-y-5'>
										{/* Restaurant Name */}
										<div className='relative group'>
											<Building2
												size={20}
												className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#415426] transition-colors'
											/>
											<input
												type='text'
												placeholder={t('partner.form.fields.restaurant')}
												name='restaurant_name'
												value={formData.restaurantName}
												onChange={(e) =>
													setFormData({ ...formData, restaurantName: e.target.value })
												}
												className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-[#415426] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#415426]/10 transition-all font-['Manrope'] text-base"
												required
												disabled={isLoading}
											/>
										</div>

										{/* Owner Name */}
										<div className='relative group'>
											<User
												size={20}
												className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#415426] transition-colors'
											/>
											<input
												type='text'
												placeholder={t('partner.form.fields.owner')}
												name='owner_name'
												value={formData.ownerName}
												onChange={(e) =>
													setFormData({ ...formData, ownerName: e.target.value })
												}
												className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-[#415426] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#415426]/10 transition-all font-['Manrope'] text-base"
												required
												disabled={isLoading}
											/>
										</div>

										{/* Phone */}
										<div className='relative group'>
											<Phone
												size={20}
												className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#415426] transition-colors'
											/>
											<input
												type='tel'
												placeholder={t('partner.form.fields.phone')}
												name='phone'
												value={formData.phone}
												onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
												className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-[#415426] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#415426]/10 transition-all font-['Manrope'] text-base"
												required
												disabled={isLoading}
											/>
										</div>

										{/* Email */}
										<div className='relative group'>
											<Mail
												size={20}
												className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#415426] transition-colors'
											/>
											<input
												type='email'
												placeholder={t('partner.form.fields.email')}
												name='email'
												value={formData.email}
												onChange={(e) => setFormData({ ...formData, email: e.target.value })}
												className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-[#415426] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#415426]/10 transition-all font-['Manrope'] text-base"
												required
												disabled={isLoading}
											/>
										</div>

										{error && (
											<p className="text-red-500 text-sm text-center font-['Manrope']">{error}</p>
										)}

										<Button
											type='submit'
											disabled={isLoading}
											className="w-full h-12 md:h-14 bg-[#415426] hover:bg-[#33421e] text-white text-base md:text-lg rounded-xl font-bold font-['Manrope'] shadow-lg shadow-[#415426]/20 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
										>
											{isLoading ? (
												<>
													<Loader2 className='mr-2 h-5 w-5 animate-spin' />
													{t('partner.form.button.loading')}
												</>
											) : (
												<>
													{t('partner.form.button.default')}
													<ArrowRight className='ml-2 h-5 w-5' />
												</>
											)}
										</Button>
									</form>
								</>
							) : (
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className='text-center py-8 md:py-12'
								>
									<div className='mx-auto flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-green-50 text-green-600 mb-6 border border-green-100'>
										<Check size={32} strokeWidth={3} className='md:w-10 md:h-10' />
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-gray-900 font-['Manrope']">
										{t('partner.form.success.title')}
									</h3>
									<p className="mt-2 text-sm md:text-base text-gray-600 font-['Manrope']">
										{t('partner.form.success.subtitle')}{' '}
										<span className='font-bold text-gray-900'>{formData.email}</span>.
									</p>
									<Button
										onClick={() => setIsSubmitted(false)}
										variant='outline'
										className='mt-8 border-gray-200 hover:bg-gray-50'
									>
										{t('partner.form.success.button')}
									</Button>
								</motion.div>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
