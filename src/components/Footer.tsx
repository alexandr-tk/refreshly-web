import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui/logo';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className='bg-[#415426] border-t border-white/10 py-12'>
			<div className='container mx-auto px-4 md:px-16'>
				<div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
					{/* Logo & Copyright */}
					<div className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
						<Link to='/' className='flex items-center gap-2'>
							<div className='w-28 text-white'>
								<Logo />
							</div>
						</Link>

						<span className='hidden md:block h-1 w-1 rounded-full bg-white/30' />

						<span className="text-sm text-white/60 font-['Manrope']">
							© 2026 ReFreshly. {t('footer.copyright')}
						</span>
					</div>

					{/* Links */}
					<div className='flex flex-wrap items-center justify-center gap-6 md:gap-8'>
						<Link
							to='/privacy'
							className="text-sm text-white/70 transition-colors hover:text-white font-['Manrope'] font-medium"
						>
							{t('footer.links.privacy')}
						</Link>
						<Link
							to='/terms'
							className="text-sm text-white/70 transition-colors hover:text-white font-['Manrope'] font-medium"
						>
							{t('footer.links.terms')}
						</Link>
						<Link
							to='/contact'
							className="text-sm text-white/70 transition-colors hover:text-white font-['Manrope'] font-medium"
						>
							{t('footer.links.contact')}
						</Link>

						{/* Separator for the Login Link */}
						<span className='hidden md:block text-white/20'>|</span>

						{/* Partner Login Link */}
						<a
							href='https://partners.refreshly.kz'
							target='_blank'
							rel='noopener noreferrer'
							className="text-sm text-[#F6871F] transition-colors hover:text-white font-['Manrope'] font-bold flex items-center gap-2"
						>
							{t('footer.links.partner')}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
