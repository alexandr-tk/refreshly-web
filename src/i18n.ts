import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// TRANSLATIONS
const resources = {
	en: {
		translation: {
			nav: {
				howItWorks: 'How it works',
				faq: 'FAQ',
				contact: 'Contact',
				getApp: 'Get App',
			},
			hero: {
				title_1: 'Great Food.',
				title_2: 'Unbeatable Prices.',
				description:
					'Reserve specific dishes from top Almaty restaurants at up to 60% off. No waiting, just pick up.',
				stats: {
					curated: 'Curated',
					restaurants: 'Restaurants',
					savings_val: 'Up to 60%',
					savings_sub: 'Savings',
					pickup_val: '~10 min',
					pickup_sub: 'Avg. Pickup',
				},
			},
			livePreview: {
				title: "What's on the menu?",
				subtitle: 'Real examples of surplus bags you can rescue today.',
				filters: {
					All: 'All',
					Meals: 'Meals',
					Bakery: 'Bakery',
					Salads: 'Salads',
					Groceries: 'Groceries',
				},
				stock: {
					few: 'Only {{count}} left!',
					many: '{{count}} portions left',
				},
				items: {
					plov: 'Uzbek Plov (Large Portion)',
					croissant: 'Evening Croissant Box',
					manti: 'Beef Manti (5 pcs)',
					olivier: 'Olivier Salad',
					samsa: 'Assorted Samsa Pack',
					dairy: 'Dairy & Yogurt Bag',
				},
			},
			howItWorks: {
				badge: 'Simple Process',
				title: 'Save food in 3 taps.',
				subtitle: "Fighting food waste hasn't been this easy (or delicious) before.",
				steps: {
					1: {
						title: 'Find a favorite',
						description:
							'Browse the map to find unsold food from restaurants, cafes, and bakeries near you.',
					},
					2: {
						title: 'Reserve in app',
						description:
							'Pay a fraction of the price to secure your meal. It’s exactly the same food, just cheaper.',
					},
					3: {
						title: 'Pick it up',
						description: 'Go to the store during the pickup window, show your code, and enjoy your meal!',
					},
				},
			},
			comparison: {
				title: 'Smart eating vs. Delivery apps.',
				subtitle: 'See why thousands of Almaty locals are switching to ReFreshly.',
				headers: {
					feature: 'Feature',
					standard: 'Standard App',
				},
				rows: {
					price: {
						feature: 'Food Price',
						desc: 'Cost of the actual meal',
						refreshly: 'Up to 60% Off',
						others: 'Full Menu Price',
					},
					speed: {
						feature: 'Speed',
						desc: 'Time until you eat',
						refreshly: 'Instant Pick-up',
						others: '45+ min Delivery',
					},
					impact: {
						feature: 'Planet Impact',
						desc: 'Environmental footprint',
						refreshly: 'Rescues Food',
						others: 'Creates Waste',
					},
					delivery: {
						feature: 'Delivery Cost',
						desc: 'Transport fees & tips',
						refreshly: '0₸ (Always)',
						others: '800₸ - 2,000₸',
					},
				},
			},
			faq: {
				title: 'Common questions.',
				subtitle: 'Everything you need to know about rescuing food.',
				questions: {
					safety: {
						q: 'Is the food safe to eat?',
						a: 'Absolutely. We only partner with licensed, high-quality restaurants. The food is simply the surplus from the day—fresh, delicious, and handled with the same safety standards as full-price meals.',
					},
					cheap: {
						q: 'Why is the food so cheap?',
						a: "Because it's surplus! Restaurants would rather sell it at a discount than throw it away. You get a great meal for 60% off, and they cover their food costs. It's a win-win.",
					},
					delivery: {
						q: 'What if I want delivery?',
						a: 'To keep our prices unbeatable and fee-free, ReFreshly does not offer delivery services. However, you are welcome to use a third-party courier (like Yandex Go or Uber). Simply share your unique order pickup code with the driver.',
					},
					mystery: {
						q: "Do I know exactly what I'm getting?",
						a: "Yes! Unlike other apps that give you a 'mystery bag', ReFreshly lets you see the exact items available (e.g., 'Uzbek Plov' or 'Croissant Box'). You know what you're reserving before you pay.",
					},
					pickup: {
						q: 'When can I pick up my order?',
						a: "Pick-up times are set by the restaurant, usually after the lunch rush or near closing time. You'll see the specific pick-up window on the app before you book.",
					},
					dietary: {
						q: 'Can I filter for dietary restrictions?',
						a: "Currently, you can browse by category (Meals, Bakery, Salads). Since our inventory changes daily based on what's left, we recommend checking the item description for specific ingredients.",
					},
				},
				footer: {
					text: 'Still have questions?',
					link: 'Contact Support',
				},
			},
			partner: {
				badge: 'For Businesses',
				title_1: 'Turn Surplus into',
				title_2: 'Revenue.',
				description:
					"Join Almaty's top restaurants minimizing food waste while gaining new customers. No setup fees, just profit.",
				benefits: {
					1: 'Turn surplus inventory into profit',
					2: 'Reach new customers every day',
					3: 'Simple dashboard, zero complexity',
				},
				form: {
					title: 'Become a Partner',
					subtitle: "Fill out the form and we'll get in touch within 24 hours.",
					fields: {
						restaurant: 'Restaurant Name',
						owner: 'Owner Name',
						phone: 'Phone Number',
						email: 'Email Address',
					},
					button: {
						default: 'Request Demo',
						loading: 'Sending...',
					},
					error: 'Something went wrong. Please try again later.',
					success: {
						title: 'Request Sent!',
						subtitle: 'Thank you! We have received your details and will contact you soon.',
						button: 'Send another request',
					},
				},
			},
			footer: {
				copyright: 'Made in Almaty.',
				links: {
					privacy: 'Privacy Policy',
					terms: 'Terms of Use',
					contact: 'Contact',
					partner: 'Partner Login',
				},
			},
			privacy: {
				title: 'Privacy Policy',
				lastUpdated: 'Last updated: January 7, 2026',
				intro: {
					title: '1. Introduction',
					text: 'ReFreshly ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.',
				},
				collection: {
					title: '2. Information We Collect',
					text: 'We collect information you provide directly to us, including:',
					list: {
						1: 'Name and contact information (email, phone number)',
						2: 'Account credentials',
						3: 'Payment information',
						4: 'Order history and preferences',
						5: 'Location data (with your explicit consent)',
					},
				},
				residency: {
					title: '3. Data Residency',
					text: 'To ensure compliance with local data protection regulations and to provide you with enhanced data security, we store all personally identifiable information (PII) on servers physically located in',
					country: 'Kazakhstan',
				},
				usage: {
					title: '4. How We Use Your Information',
					text: 'We use the information we collect to:',
					list: {
						1: 'Provide, maintain, and improve our services',
						2: 'Process transactions and send related information',
						3: 'Send promotional communications (only with your consent)',
						4: 'Respond to your comments, questions, and requests',
						5: 'Monitor and analyze trends, usage, and activities',
					},
				},
				security: {
					title: '5. Data Security',
					text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We regularly review our security practices to ensure the safety of your data.',
				},
				rights: {
					title: '6. Your Rights',
					text: 'You have the right to access, correct, or delete your personal information. You may also object to processing or request data portability. To exercise these rights, please contact us.',
				},
				contact: {
					title: '7. Contact Us',
					text: 'If you have any questions about this Privacy Policy, please contact us at:',
				},
			},
			terms: {
				title: 'Terms of Use',
				lastUpdated: 'Last updated: January 7, 2026',
				sections: {
					1: {
						title: '1. Acceptance of Terms',
						text: 'By accessing or using the ReFreshly mobile application and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.',
					},
					2: {
						title: '2. Description of Service',
						text: 'ReFreshly provides a marketplace platform connecting users with restaurants offering surplus food at discounted prices. We facilitate reservations and payments but do not prepare, handle, or directly sell food products. The legal contract for the supply of food is between you and the Restaurant.',
					},
					3: {
						title: '3. User Accounts',
						text: 'To use certain features of our service, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and current information.',
					},
					4: {
						title: '4. Payments & Currency',
						text: 'All transactions are processed in',
						currency: 'Kazakhstani Tenge (KZT)',
						list: {
							1: 'Prices displayed in the app are final and include applicable taxes.',
							2: 'Payment processing is handled by our secure third-party payment partners.',
							3: 'ReFreshly does not store your full credit card information.',
						},
					},
					5: {
						title: '5. Reservations & Pickups',
						text: 'When you make a reservation through ReFreshly:',
						list: {
							1: 'You commit to picking up the order within the specific time window displayed in the app.',
							2: 'Orders not picked up by the end of the window may be disposed of by the restaurant for safety reasons.',
							3: 'No refunds are issued for uncollected orders (no-shows).',
						},
					},
					6: {
						title: '6. Delivery & Transportation',
						text: 'ReFreshly does not provide delivery services.',
						subtext: 'We are strictly a reservation and pickup platform.',
						list: {
							1: 'The User is solely responsible for arranging the transport of their order.',
							2: 'You may use third-party courier services (e.g., Yandex, Uber) to collect your order, but you do so at your own risk.',
							3: 'ReFreshly and the Partner Restaurant are not responsible for any delays, damage, spills, or temperature changes that occur once the order leaves the restaurant premises via a third-party courier.',
						},
					},
					7: {
						title: '7. Cancellation Policy',
						text: 'You may cancel a reservation up to 1 hour before the pickup window begins for a full refund. Cancellations made less than 1 hour before the pickup time are not eligible for refunds, as the food has likely already been prepared or reserved for you.',
					},
					8: {
						title: '8. Intellectual Property',
						text: 'All content, trademarks, and intellectual property on the ReFreshly platform are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works without our written permission.',
					},
					9: {
						title: '9. Limitation of Liability',
						text: "ReFreshly acts solely as an intermediary. We are not liable for the quality, safety, or legality of food products offered by partner restaurants, nor for any errors or omissions in the restaurant's menu descriptions.",
					},
					10: {
						title: '10. Governing Law',
						text: 'These Terms are governed by the laws of the Republic of Kazakhstan. Any disputes shall be resolved in the courts of Almaty, Kazakhstan.',
					},
					11: {
						title: '11. Contact',
						text: 'For questions about these Terms, please contact us at:',
					},
				},
			},
			contact: {
				badge: 'Get in touch',
				title: "We're here to help.",
				subtitle:
					'Have a question about an order, or interested in partnering with us? Our team in Almaty is ready to answer all your questions.',
				cards: {
					email: {
						title: 'Email',
						desc: 'We respond within 24 hours',
					},
					phone: {
						title: 'Phone',
						desc: 'Mon-Fri, 9:00 - 18:00',
					},
					office: {
						title: 'Office',
						content: '127 Nauryzbay Batyr St, Office 612',
						desc: 'Almaty, Kazakhstan',
					},
					support: {
						title: 'Support Hours',
						content: '9:00 - 21:00',
						desc: 'Every day including weekends',
					},
				},
				departments: {
					users: {
						title: 'For Users',
						subtitle: 'App & Order Support',
						desc: 'Having trouble with the app, a reservation, or need a refund? Check our Frequently Asked Questions for instant answers.',
						link: 'Visit Help Center',
					},
					partners: {
						title: 'For Partners',
						subtitle: 'Business Inquiries',
						desc: "Interested in listing your restaurant on ReFreshly? Let's discuss how we can help you turn surplus food into extra revenue.",
						link: 'Partner with us',
					},
				},
			},
			meta: {
				title: 'ReFreshly - Great Food, Unbeatable Prices',
			},
		},
	},
	ru: {
		translation: {
			nav: {
				howItWorks: 'Как это работает',
				faq: 'Частые вопросы', // More natural than "FAQ"
				contact: 'Контакты',
				getApp: 'Скачать',
			},
			hero: {
				// "Favorite dishes. At super prices." -> Sounds much more inviting
				title_1: 'Свежие блюда.',
				title_2: 'По супер ценам.',

				// "Order from best places with benefits. No queues - just pick up."
				description:
					'Заказывайте еду из лучших заведений Алматы с выгодой до 60%. Без очередей — просто заберите заказ.',

				stats: {
					curated: 'Лучшие', // "Best"
					restaurants: 'Заведения', // "Establishments" (broader than just restaurants)
					savings_val: 'До 60%',
					savings_sub: 'Выгода', // "Benefit/Gain" sounds better than "Savings" (Economy) here
					pickup_val: '~10 мин',
					pickup_sub: 'На самовывоз', // "For pickup" - specifically refers to the time needed
				},
			},
			livePreview: {
				title: 'Что в меню?',
				subtitle: 'Реальные примеры того, что можно спасти прямо сейчас.',
				filters: {
					All: 'Все',
					Meals: 'Горячее',
					Bakery: 'Выпечка',
					Salads: 'Салаты',
					Groceries: 'Продукты',
				},
				stock: {
					few: 'Осталось всего {{count}}!',
					many: 'Осталось {{count}} порции',
				},
				items: {
					plov: 'Узбекский плов (Большая порция)',
					croissant: 'Набор вечерней выпечки',
					manti: 'Манты с говядиной (5 шт)',
					olivier: 'Салат Оливье',
					samsa: 'Ассорти самсы',
					dairy: 'Сливочный десерт',
				},
			},
			howItWorks: {
				badge: 'Всё просто', // "It's simple" - sounds friendlier than "Simple Process"
				title: 'Спасите еду в 3 клика.',
				subtitle: 'Борьба с пищевыми отходами ещё никогда не была такой простой (и вкусной).',
				steps: {
					1: {
						title: 'Найдите любимое', // "Find [your] favorite"
						description: 'Ищите на карте блюда из ресторанов, кафе и пекарен поблизости.',
					},
					2: {
						title: 'Забронируйте', // "Reserve"
						description:
							'Оплатите часть стоимости в приложении. Это та же самая вкусная еда, просто дешевле.',
					},
					3: {
						title: 'Заберите заказ', // "Pick up order"
						description: 'Придите в заведение в указанное время, покажите код и наслаждайтесь!',
					},
				},
			},
			comparison: {
				title: 'Умное потребление vs Доставка.',
				subtitle: 'Почему тысячи алматинцев выбирают ReFreshly.',
				headers: {
					feature: 'Особенность',
					standard: 'Обычная доставка',
				},
				rows: {
					price: {
						feature: 'Цена еды',
						desc: 'Стоимость самого блюда',
						refreshly: 'Скидка до 60%',
						others: 'Полная цена',
					},
					speed: {
						feature: 'Скорость',
						desc: 'Время до начала трапезы',
						refreshly: 'Сразу (Самовывоз)',
						others: '45+ мин доставка',
					},
					impact: {
						feature: 'Влияние на мир',
						desc: 'Экологический след',
						refreshly: 'Спасает еду',
						others: 'Создает отходы',
					},
					delivery: {
						feature: 'Стоимость доставки',
						desc: 'Транспортные расходы',
						refreshly: '0₸ (Всегда)',
						others: '800₸ - 2,000₸',
					},
				},
			},
			faq: {
				title: 'Частые вопросы.',
				subtitle: 'Всё, что нужно знать о спасении еды.',
				questions: {
					safety: {
						q: 'Это безопасно есть?',
						a: 'Абсолютно. Мы работаем только с лицензированными заведениями. Это свежая еда, приготовленная сегодня, просто её не успели продать. Она такая же вкусная и качественная, как и блюда за полную цену.',
					},
					cheap: {
						q: 'Почему так дешево?',
						a: 'Потому что это излишки! Ресторанам выгоднее продать блюда со скидкой, чем выбросить их. Вы получаете отличный ужин со скидкой 60%, а заведение покрывает свои расходы. Выигрывают все.',
					},
					delivery: {
						q: 'Есть ли доставка?',
						a: 'Чтобы сохранить цены максимально низкими, у нас нет своей доставки. Но вы можете заказать курьера (Яндекс или Uber). Просто отправьте водителю код получения заказа, и он заберет его за вас.',
					},
					mystery: {
						q: 'Я знаю, что покупаю?',
						a: 'Да! В отличие от других приложений с «сюрприз-боксами», в ReFreshly вы видите конкретные блюда (например, «Плов» или «Круассаны»). Вы точно знаете, что бронируете.',
					},
					pickup: {
						q: 'Когда можно забрать заказ?',
						a: 'Время самовывоза устанавливает ресторан — обычно после обеда или перед закрытием. Вы увидите точное время в приложении перед оплатой.',
					},
					dietary: {
						q: 'Есть фильтр по ингредиентам?',
						a: 'Сейчас вы можете искать по категориям (Горячее, Выпечка, Салаты). Так как меню меняется каждый день, мы рекомендуем читать описание конкретного блюда перед заказом.',
					},
				},
				footer: {
					text: 'Остались вопросы?',
					link: 'Напишите в поддержку',
				},
			},
			partner: {
				badge: 'Для бизнеса',
				title_1: 'Превратите излишки в',
				title_2: 'Прибыль.',
				description:
					'Присоединяйтесь к лучшим ресторанам Алматы. Минимизируйте отходы и привлекайте новых гостей. Без скрытых комиссий.',
				benefits: {
					1: 'Превратите остатки в доход', // "Turn leftovers into income"
					2: 'Новые клиенты каждый день',
					3: 'Простая панель управления',
				},
				form: {
					title: 'Стать партнером',
					subtitle: 'Заполните форму, и мы свяжемся с вами в течение 24 часов.',
					fields: {
						restaurant: 'Название заведения',
						owner: 'Имя владельца',
						phone: 'Номер телефона',
						email: 'Email адрес',
					},
					button: {
						default: 'Оставить заявку',
						loading: 'Отправка...',
					},
					error: 'Что-то пошло не так. Попробуйте позже.',
					success: {
						title: 'Заявка отправлена!',
						subtitle: 'Спасибо! Мы получили ваши данные и скоро свяжемся с вами.',
						button: 'Отправить еще одну',
					},
				},
			},
			footer: {
				copyright: 'Сделано в Алматы.',
				links: {
					privacy: 'Конфиденциальность', // Much shorter than "Политика конфиденциальности"
					terms: 'Условия', // Shortened from "Условия использования"
					contact: 'Контакты',
					partner: 'Для бизнеса', // Fits button style better
				},
			},
			privacy: {
				title: 'Политика конфиденциальности',
				lastUpdated: 'Последнее обновление: 7 января 2026 г.',
				intro: {
					title: '1. Введение',
					text: 'ReFreshly («мы», «наш» или «нас») стремится защищать вашу конфиденциальность. Эта Политика объясняет, как мы собираем, используем, раскрываем и охраняем вашу информацию при использовании нашего мобильного приложения.',
				},
				collection: {
					title: '2. Сбор информации',
					text: 'Мы собираем информацию, которую вы предоставляете нам напрямую, включая:',
					list: {
						1: 'Имя и контактная информация (email, телефон)',
						2: 'Учетные данные аккаунта',
						3: 'Платежная информация',
						4: 'История заказов и предпочтения',
						5: 'Данные о местоположении (с вашего согласия)',
					},
				},
				residency: {
					title: '3. Хранение данных',
					text: 'Для соблюдения местных норм защиты данных и обеспечения безопасности, мы храним все персональные данные (PII) на серверах, физически расположенных в',
					country: 'Казахстане',
				},
				usage: {
					title: '4. Использование информации',
					text: 'Мы используем собранную информацию для:',
					list: {
						1: 'Предоставления и улучшения наших услуг',
						2: 'Обработки транзакций и отправки уведомлений',
						3: 'Отправки рекламных сообщений (только с согласия)',
						4: 'Ответов на ваши вопросы и запросы',
						5: 'Анализа трендов и активности пользователей',
					},
				},
				security: {
					title: '5. Защита данных',
					text: 'Мы применяем технические и организационные меры для защиты вашей информации от несанкционированного доступа, изменения или уничтожения. Мы регулярно обновляем наши методы безопасности.',
				},
				rights: {
					title: '6. Ваши права',
					text: 'Вы имеете право на доступ, исправление или удаление вашей личной информации. Вы также можете возразить против обработки данных. Свяжитесь с нами для реализации этих прав.',
				},
				contact: {
					title: '7. Контакты',
					text: 'Если у вас есть вопросы о Политике конфиденциальности, свяжитесь с нами:',
				},
			},
			terms: {
				title: 'Условия использования',
				lastUpdated: 'Обновлено: 7 января 2026 г.',
				sections: {
					1: {
						title: '1. Принятие условий',
						text: 'Используя приложение ReFreshly, вы соглашаетесь с данными Условиями. Если вы не согласны, пожалуйста, не используйте наш сервис.',
					},
					2: {
						title: '2. Описание услуг',
						text: 'ReFreshly — это платформа, соединяющая пользователей с заведениями, продающими излишки еды со скидкой. Мы обеспечиваем бронирование и оплату, но не готовим и не продаем еду напрямую. Договор о поставке еды заключается между вами и Рестораном.',
					},
					3: {
						title: '3. Аккаунты',
						text: 'Для использования сервиса необходима регистрация. Вы несете ответственность за безопасность своих данных и активность в аккаунте. Пожалуйста, указывайте достоверную информацию.',
					},
					4: {
						title: '4. Оплата и валюта',
						text: 'Все транзакции обрабатываются в',
						currency: 'Казахстанских тенге (KZT)',
						list: {
							1: 'Цены в приложении являются окончательными и включают налоги.',
							2: 'Оплата обрабатывается безопасными сторонними сервисами.',
							3: 'ReFreshly не хранит полные данные вашей карты.',
						},
					},
					5: {
						title: '5. Бронирование и самовывоз',
						text: 'При бронировании через ReFreshly:',
						list: {
							1: 'Вы обязуетесь забрать заказ в указанное в приложении время.',
							2: 'Незабранные вовремя заказы могут быть утилизированы рестораном из соображений безопасности.',
							3: 'Возврат средств за незабранные заказы не производится.',
						},
					},
					6: {
						title: '6. Доставка',
						text: 'ReFreshly не предоставляет услуги доставки.',
						subtext: 'Мы — платформа для бронирования и самовывоза.',
						list: {
							1: 'Пользователь самостоятельно организует транспортировку заказа.',
							2: 'Вы можете использовать сторонних курьеров (Яндекс, Uber) на свой страх и риск.',
							3: 'Мы не несем ответственности за задержки или повреждение заказа после его передачи курьеру.',
						},
					},
					7: {
						title: '7. Отмена заказа',
						text: 'Отмена с полным возвратом возможна за 1 час до начала времени самовывоза. При отмене менее чем за 1 час возврат не производится, так как еда уже могла быть подготовлена.',
					},
					8: {
						title: '8. Интеллектуальная собственность',
						text: 'Весь контент и товарные знаки ReFreshly принадлежат нам. Копирование и распространение материалов без разрешения запрещено.',
					},
					9: {
						title: '9. Ограничение ответственности',
						text: 'ReFreshly — посредник. Мы не несем ответственности за качество или безопасность еды партнеров, а также за ошибки в описании меню.',
					},
					10: {
						title: '10. Применимое право',
						text: 'Настоящие Условия регулируются законодательством Республики Казахстан. Споры разрешаются в судах г. Алматы.',
					},
					11: {
						title: '11. Контакты',
						text: 'По вопросам Условий свяжитесь с нами:',
					},
				},
			},
			contact: {
				badge: 'Свяжитесь с нами',
				title: 'Мы здесь, чтобы помочь.',
				subtitle:
					'Есть вопросы о заказе или хотите стать партнером? Наша команда в Алматы готова ответить на все ваши вопросы.',
				cards: {
					email: {
						title: 'Email',
						desc: 'Отвечаем в течение 24 часов',
					},
					phone: {
						title: 'Телефон',
						desc: 'Пн-Пт, 9:00 - 18:00',
					},
					office: {
						title: 'Офис',
						content: 'ул. Наурызбай Батыра 127, офис 612',
						desc: 'Алматы, Казахстан',
					},
					support: {
						title: 'Служба поддержки',
						content: '9:00 - 21:00',
						desc: 'Ежедневно, без выходных',
					},
				},
				departments: {
					users: {
						title: 'Пользователям',
						subtitle: 'Поддержка заказов',
						desc: 'Проблемы с приложением, бронированием или нужен возврат? Проверьте наш раздел Частых Вопросов для быстрых ответов.',
						link: 'Перейти к вопросам',
					},
					partners: {
						title: 'Партнерам',
						subtitle: 'Бизнес-запросы',
						desc: 'Хотите добавить свой ресторан в ReFreshly? Давайте обсудим, как мы можем помочь вам превратить излишки в дополнительный доход.',
						link: 'Стать партнером',
					},
				},
			},
			meta: {
				title: 'ReFreshly - Любимые блюда, Супер цены',
			},
		},
	},
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		lng: 'ru',
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
