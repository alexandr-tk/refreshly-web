import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './ui/logo';
import { useTranslation } from 'react-i18next';

// Languages: Only EN and RU
const languages = [
	{ code: 'en', label: 'EN' },
	{ code: 'ru', label: 'RU' },
];

// App Store Links
const APP_STORE_LINK = 'https://apps.apple.com/kz/app/refreshly/id6756068724';
const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.refreshly';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t, i18n } = useTranslation();

	const changeLanguage = (langCode: string) => {
		i18n.changeLanguage(langCode);
		setIsOpen(false);
	};

	// 📱 Device Detection Handler
	const handleAppRedirect = () => {
		if (typeof window === 'undefined') return;

		interface CustomWindow extends Window {
			opera?: string;
			MSStream?: unknown;
		}

		const customWindow = window as unknown as CustomWindow;
		const userAgent = navigator.userAgent || navigator.vendor || customWindow.opera || '';

		// Check for iOS (iPhone, iPad, iPod)
		if (/iPad|iPhone|iPod/.test(userAgent) && !customWindow.MSStream) {
			window.open(APP_STORE_LINK, '_blank');
		} else {
			// Default to Google Play for Android and Desktop
			window.open(PLAY_STORE_LINK, '_blank');
		}
	};

	const navLinks = [
		{ href: '/#how-it-works', label: t('nav.howItWorks') },
		{ href: '/#faq', label: t('nav.faq') },
		{ href: '/contact', label: t('nav.contact') },
	];

	return (
		<>
			{/* IMPORT MANROPE (Supports English & Russian perfectly) */}
			<style>
				{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');`}
			</style>

			<header className='fixed top-0 left-0 right-0 z-50 h-24 bg-[#415426] border-b border-white/5 shadow-sm transition-all'>
				<div className='mx-auto max-w-8xl px-4 md:px-16 h-full flex items-center justify-between'>
					{/* LOGO */}
					<Link to='/' className='shrink-0 text-white hover:opacity-90 transition-opacity'>
						<div className='w-36 md:w-40 text-white'>
							<Logo />
						</div>
					</Link>

					{/* DESKTOP MENU */}
					<div className='hidden md:flex items-center h-full'>
						<nav className='flex items-center gap-10 mr-12'>
							{navLinks.map((link) => (
								<Link
									key={link.href}
									to={link.href}
									className="text-[16px] font-semibold text-white/90 hover:text-white transition-colors font-['Manrope'] tracking-wide"
								>
									{link.label}
								</Link>
							))}
						</nav>

						{/* Divider */}
						<div className='h-8 w-px bg-white/20 mr-12' />

						{/* Actions */}
						<div className='flex items-center gap-10'>
							{/* Language Selector */}
							<div className="flex items-center gap-5 text-[14px] font-bold font-['Manrope']">
								{languages.map((lang) => (
									<button
										key={lang.code}
										onClick={() => changeLanguage(lang.code)}
										className={`transition-colors uppercase ${
											i18n.language.startsWith(lang.code)
												? 'text-white'
												: 'text-white/40 hover:text-white/70'
										}`}
									>
										{lang.label}
									</button>
								))}
							</div>

							{/* CTA Button (Desktop) */}
							<Button
								onClick={handleAppRedirect} // ✅ Added Smart Redirect
								className="
                                    h-12 px-8 rounded-xl
                                    font-['Manrope'] font-extrabold text-[16px] tracking-wide
                                    bg-[#F99D1C]
                                    text-white
                                    shadow-md shadow-black/10
                                    border border-white/5
                                    hover:bg-[#fab347]
                                    transition-colors duration-200
                                "
							>
								{t('nav.getApp')}
							</Button>
						</div>
					</div>

					{/* Mobile Toggle */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors'
					>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* MOBILE MENU */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							className='md:hidden bg-[#415426] border-t border-white/10 overflow-hidden absolute top-full left-0 right-0 shadow-xl'
						>
							<div className='px-6 py-8 flex flex-col gap-8'>
								{navLinks.map((link) => (
									<Link
										key={link.href}
										to={link.href}
										onClick={() => setIsOpen(false)}
										className="text-lg font-bold text-white flex justify-between items-center font-['Manrope']"
									>
										{link.label}
										<ChevronRight className='w-5 h-5 text-white/40' />
									</Link>
								))}

								<div className='h-px bg-white/10' />

								<div className='flex flex-col gap-6 items-center'>
									<div className='flex justify-center gap-8'>
										{languages.map((lang) => (
											<button
												key={lang.code}
												onClick={() => changeLanguage(lang.code)}
												className={`text-sm font-bold transition-all font-['Manrope'] ${
													i18n.language.startsWith(lang.code)
														? 'text-white scale-110'
														: 'text-white/40'
												}`}
											>
												{lang.label}
											</button>
										))}
									</div>

									{/* CTA Button (Mobile) */}
									<Button
										onClick={handleAppRedirect} // ✅ Added Smart Redirect
										className="w-full bg-[#F99D1C] text-white rounded-lg py-6 text-base font-['Manrope'] font-extrabold shadow-md hover:bg-[#fab347]"
									>
										{t('nav.getApp')}
									</Button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</>
	);
};
