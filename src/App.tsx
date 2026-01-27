import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Import hook
import Index from './pages/Index';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import ScrollToHash from './components/ScrollToHash';

// Initialize React Query
const queryClient = new QueryClient();

const App = () => {
	// 2. Access translation hook
	const { t } = useTranslation();

	// 3. Dynamic Title Effect
	// This updates the browser tab title whenever the language changes
	useEffect(() => {
		document.title = t('meta.title');
	}, [t]);

	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<BrowserRouter>
					<ScrollToHash />
					<Routes>
						<Route path='/' element={<Index />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/privacy' element={<Privacy />} />
						<Route path='/terms' element={<Terms />} />
						{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</TooltipProvider>
		</QueryClientProvider>
	);
};

export default App;
