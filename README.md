# ReFreshly 🌿

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

**A surplus food marketplace connecting eco-conscious customers with local restaurants in Almaty to reduce food waste and save money.**

[**View Live Demo**](https://refreshly.kz) · [**Report Bug**](https://github.com/alexandr-tk/refreshly-web/issues)

---

## 📖 Project Overview

ReFreshly is a bilingual (English/Russian) web platform designed to tackle the problem of food waste in the hospitality industry. It allows restaurants to list unsold inventory at discounted rates (up to 60% off) for end-of-day pickup.

This project demonstrates the development of a high-performance landing page and partner onboarding flow, focusing on **localization**, **responsive UI/UX**, and **conversion optimization**.

### ✨ Key Features

* **🌐 Full Localization (i18n):** Seamlessly toggles between English and Russian with dynamic content reloading and browser title updates.
* **📱 Smart Device Detection:** The "Get App" CTA intelligently routes users to the **App Store** (iOS) or **Google Play** (Android/Desktop) based on their user agent.
* **🎨 Advanced Animations:** Utilizes `framer-motion` for scroll-triggered reveals, smooth transitions, and interactive hover states.
* **⚡ Reactive Data & State:** Powered by React hooks for managing UI state (modals, language switching, form handling).
* **📧 Serverless Email Integration:** Integrated **EmailJS** to handle partner inquiries directly from the frontend without a dedicated backend server.
* **📊 Interactive Comparisons:** Custom-built comparison tables with responsive layouts (switching from grid to stacked cards on mobile).

---

## 🛠️ Tech Stack

* **Core:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS, Shadcn UI (Primitives)
* **Animations:** Framer Motion
* **Internationalization:** i18next, react-i18next
* **Routing:** React Router DOM v6
* **Icons:** Lucide React
* **Services:** EmailJS (Form handling), TanStack Query (State management)

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

* Node.js (v16.x or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/refreshly-web.git](https://github.com/your-username/refreshly-web.git)
    cd refreshly-web
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your EmailJS credentials:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

---

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   └── ui/           # Shadcn UI primitives (Buttons, Toasts)
├── pages/            # Page-level components (Index, Contact, Terms)
├── i18n.ts           # Localization configuration
├── App.tsx           # Main router and provider setup
└── main.tsx          # Entry point

```

---

## 💡 Technical Highlights

### Smart Redirect Logic

To improve conversion rates, the application detects the user's operating system to serve the correct store link immediately.

```typescript
const handleAppRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        window.open(APP_STORE_LINK, '_blank');
    } else {
        window.open(PLAY_STORE_LINK, '_blank');
    }
};

```

### Dynamic Localization

The app uses `i18next` not just for text, but to dynamically update the document metadata for SEO and UX.

```typescript
// App.tsx
useEffect(() => {
    document.title = t('meta.title');
}, [t]);

```

## 📬 Contact

**Alex Tkachyov** - [LinkedIn Profile](https://linkedin.com/in/alexandr-tkachyov) - [Email](mailto:alex.tkachyov.y@gmail.com)

Project Link: [https://github.com/alexandr-tk/refreshly-website](https://www.google.com/search?q=https://github.com/alexandr-tk/refreshly-website)

