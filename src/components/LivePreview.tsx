/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// App Store Links
const APP_STORE_LINK = 'https://apps.apple.com/kz/app/refreshly/id6756068724';
const PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.refreshly';

export const LivePreview = () => {
	const { t } = useTranslation();
	const [activeFilter, setActiveFilter] = useState('All');

	// 1. Define Filters Dynamically
	const filters = [
		{ id: 'All', label: t('livePreview.filters.All') },
		{ id: 'Meals', label: t('livePreview.filters.Meals') },
		{ id: 'Bakery', label: t('livePreview.filters.Bakery') },
		{ id: 'Salads', label: t('livePreview.filters.Salads') },
		{ id: 'Groceries', label: t('livePreview.filters.Groceries') },
	];

	// 2. Define Menu Items Dynamically (to access translations)
	const menuItems = [
		{
			id: 1,
			name: t('livePreview.items.plov'),
			category: 'Meals', // Keep internal ID English for filtering
			originalPrice: 2500,
			price: 1200,
			image: '/placeholders/plov.jpg',
			portions: 4,
		},
		{
			id: 2,
			name: t('livePreview.items.croissant'),
			category: 'Bakery',
			originalPrice: 3200,
			price: 1500,
			image: '/placeholders/croissants.jpg',
			portions: 2,
		},
		{
			id: 3,
			name: t('livePreview.items.manti'),
			category: 'Meals',
			originalPrice: 2000,
			price: 900,
			image: '/placeholders/manti.jpg',
			portions: 1,
		},
		{
			id: 4,
			name: t('livePreview.items.olivier'),
			category: 'Salads',
			originalPrice: 1800,
			price: 800,
			image: '/placeholders/salad.jpg',
			portions: 3,
		},
		{
			id: 5,
			name: t('livePreview.items.samsa'),
			category: 'Bakery',
			originalPrice: 1500,
			price: 700,
			image: '/placeholders/samsa.jpg',
			portions: 5,
		},
		{
			id: 6,
			name: t('livePreview.items.dairy'),
			category: 'Groceries',
			originalPrice: 2000,
			price: 970,
			image: '/placeholders/dairy.jpg',
			portions: 2,
		},
	];

	const filteredItems =
		activeFilter === 'All' ? menuItems : menuItems.filter((item) => item.category === activeFilter);

	// Device Detection Handler
	const handleAppRedirect = () => {
		if (typeof window === 'undefined') return;

		interface CustomWindow extends Window {
			opera?: string;
			MSStream?: unknown;
		}

		const customWindow = window as unknown as CustomWindow;
		const userAgent = navigator.userAgent || navigator.vendor || customWindow.opera || '';

		if (/iPad|iPhone|iPod/.test(userAgent) && !customWindow.MSStream) {
			window.open(APP_STORE_LINK, '_blank');
		} else {
			window.open(PLAY_STORE_LINK, '_blank');
		}
	};

	return (
		<section id='preview' className='py-20 bg-gray-50'>
			{/* Hide Scrollbar CSS for mobile carousel */}
			<style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

			<div className='container mx-auto px-4 md:px-16'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center max-w-2xl mx-auto'
				>
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-['Manrope']">
						{t('livePreview.title')}
					</h2>
					<p className="mt-4 text-lg text-gray-600 font-['Manrope']">{t('livePreview.subtitle')}</p>
				</motion.div>

				{/* Pill Filters */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className='mt-8 flex flex-wrap justify-center gap-2 md:gap-3'
				>
					{filters.map((filter) => (
						<button
							key={filter.id}
							onClick={() => setActiveFilter(filter.id)}
							className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 font-['Manrope'] ${
								activeFilter === filter.id
									? 'bg-[#415426] text-white shadow-md scale-105'
									: 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
							}`}
						>
							{filter.label}
						</button>
					))}
				</motion.div>

				{/* Cards Container */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='mt-10'
				>
					<div
						className='
            flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 no-scrollbar
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 md:mx-0 md:px-0 md:overflow-visible
          '
					>
						{filteredItems.map((item) => (
							<motion.div
								key={item.id}
								layoutId={`card-${item.id}`}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3 }}
								className='
                  group relative flex-shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center
                  rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300
                '
							>
								{/* Discount Badge */}
								<div className="absolute top-4 left-4 z-10 rounded-full bg-[#F6871F] px-3 py-1 text-xs font-bold text-white shadow-sm font-['Manrope']">
									-{Math.round((1 - item.price / item.originalPrice) * 100)}%
								</div>

								{/* Image Area */}
								<div className='aspect-[4/3] w-full overflow-hidden rounded-t-3xl bg-gray-200 relative'>
									<img
										src={item.image}
										alt={item.name}
										className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
										onError={(e) => {
											(e.target as HTMLImageElement).src =
												'https://placehold.co/600x400/e2e8f0/415426?text=ReFreshly+Meal';
										}}
									/>
									<div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity' />
								</div>

								{/* Content */}
								<div className='p-5'>
									<div className='flex items-start justify-between gap-4'>
										<div>
											<h3 className="font-bold text-gray-900 text-lg font-['Manrope'] line-clamp-1">
												{item.name}
											</h3>
											<p className="mt-1 text-xs font-bold text-[#415426] uppercase tracking-wider font-['Manrope']">
												{/* Translate category label for display */}
												{t(`livePreview.filters.${item.category}` as any)}
											</p>
										</div>

										{/* SMART PLUS BUTTON */}
										<button
											onClick={handleAppRedirect}
											className='flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#415426] hover:text-white transition-colors cursor-pointer'
											aria-label='Add to cart (Opens App Store)'
										>
											<Plus size={18} strokeWidth={2.5} />
										</button>
									</div>

									<div className='mt-4 flex items-baseline gap-2'>
										<span className="text-xl font-extrabold text-[#415426] font-['Manrope']">
											₸{item.price.toLocaleString()}
										</span>
										<span className="text-sm text-gray-400 line-through font-medium font-['Manrope']">
											₸{item.originalPrice.toLocaleString()}
										</span>
									</div>

									<div className='mt-3 flex items-center gap-2'>
										<div
											className={`h-2 w-2 rounded-full ${item.portions <= 2 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}
										/>
										<p
											className={`text-xs font-bold font-['Manrope'] ${item.portions <= 2 ? 'text-red-500' : 'text-gray-500'}`}
										>
											{item.portions <= 2
												? t('livePreview.stock.few', { count: item.portions })
												: t('livePreview.stock.many', { count: item.portions })}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};
