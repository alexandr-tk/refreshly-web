import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		// If there is a hash (e.g. #partner), scroll to it
		if (hash) {
			const element = document.getElementById(hash.replace('#', ''));
			if (element) {
				// Small timeout to ensure page content is loaded
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}, 100);
			}
		} else {
			// If no hash (standard page load), scroll to top
			window.scrollTo(0, 0);
		}
	}, [pathname, hash]);

	return null;
};

export default ScrollToHash;
