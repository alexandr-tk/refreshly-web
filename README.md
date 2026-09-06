<div align="center">
  <img src="public/favicon.svg" alt="ReFreshly Logo" width="60" height="60" style="vertical-align: middle; margin-bottom: 8px;" />
  <h1 style="display: inline-block; vertical-align: middle; margin-left: 10px;">ReFreshly Web</h1>
  
  <p><strong>Website for ReFreshly's surplus-food marketplace in Kazakhstan</strong></p>

  <p>
    <a href="https://refreshly.kz">
      <img src="https://img.shields.io/badge/Live_Product-refreshly.kz-2ea44f?style=flat&logo=vercel" alt="Live Deployment" />
    </a>
    <img src="https://img.shields.io/badge/Market-Almaty,_KZ-blue" alt="Region" />
    <img src="https://img.shields.io/badge/Funnel-Mobile_App_Acquisition-purple" alt="Objective" />
  </p>
</div>

<br />

## Overview

This repository contains the ReFreshly website, with mobile-app download links, product information, and a restaurant partnership form.

ReFreshly is a seed-funded initiative ($20k) serving Almaty. The website supports Russian and English.


## Website behavior

Customers can find the mobile app; restaurant partners can send an inquiry.

### 1. App download links
The navigation download button checks the browser user agent:
* **Recognized iOS devices:** Open the App Store listing.
* **Other devices, including desktop browsers:** Open Google Play.


### 2. Language switching (i18n)
Russian and English strings are bundled through i18next.
* **Metadata:** The app updates the page title in the browser when the language changes. The HTML description remains static. This does not guarantee search-engine indexing.
* **Language state:** The app starts in Russian. A selected language lasts for the current session in memory; it is not saved across reloads.

### 3. Partnership inquiries
The restaurant form sends an email through **EmailJS** from the browser and displays success or failure. This repository does not include a CRM integration or delivery-time guarantee.


## The Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Core** | React 18, TypeScript, Vite |
| **Animation** | Framer Motion (Scroll-linked animations) |
| **Styling System** | Tailwind CSS, Shadcn UI (Primitives) |
| **Internationalization** | i18next, react-i18next |
| **State Management** | React Hooks (Local), TanStack Query (Server) |


## Local Development

To run the website locally:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/alexandr-tk/refreshly-web.git
    cd refreshly-web
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env` file to configure EmailJS:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Launch**
    ```bash
    npm run dev
    ```


## Contact

**Alex Tkachyov** - Co-Founder & CTO
* **Mobile app:** [ReFreshly Mobile (iOS/Android)](https://refreshly.kz)
* **Connect:** [LinkedIn](https://linkedin.com/in/alexandr-tkachyov)


## License
© 2026 ReFreshly. All rights reserved.
This repository is public for educational and portfolio purposes. 
Commercial usage, modification, or distribution of this code is strictly prohibited.
