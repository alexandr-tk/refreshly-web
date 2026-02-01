<div align="center">
  <img src="public/favicon.svg" alt="ReFreshly Logo" width="60" height="60" style="vertical-align: middle; margin-bottom: 8px;" />
  <h1 style="display: inline-block; vertical-align: middle; margin-left: 10px;">ReFreshly Web</h1>
  
  <p><strong>The Growth & Acquisition Portal for Kazakhstan's Food Waste Marketplace</strong></p>

  <p>
    <a href="https://refreshly.kz">
      <img src="https://img.shields.io/badge/Live_Product-refreshly.kz-2ea44f?style=flat&logo=vercel" alt="Live Deployment" />
    </a>
    <img src="https://img.shields.io/badge/Market-Almaty,_KZ-blue" alt="Region" />
    <img src="https://img.shields.io/badge/Funnel-Mobile_App_Acquisition-purple" alt="Objective" />
  </p>
</div>

<br />

## 🚀 System Overview

This repository hosts the **consumer-facing web portal** for the ReFreshly ecosystem. 

As the primary touchpoint for our seed-funded initiative ($20k), this codebase prioritizes **Zero-Latency Localization** and **Smart Device Routing** to maximize partner and user onboarding in the bilingual Almaty market.

---

## 🏗️ Growth Engineering Architecture

We architected the frontend to serve two distinct user personas (B2C Customers & B2B Partners) with a focus on conversion rate optimization (CRO).

### 1. Intelligent Traffic Routing
To drive app installs, the platform utilizes User-Agent heuristics to dynamically reconfigure Call-to-Action (CTA) paths:
* **iOS Traffic:** Deep links directly to the App Store.
* **Android Traffic:** Routes to Google Play.


### 2. Zero-Latency Localization (i18n)
Full localization support was architected to ensure feature parity and SEO performance in both Russian and English.
* **Dynamic Metadata:** SEO tags and page titles update synchronously with language state to preserve search indexing.
* **Persistent State:** User preference is cached to ensure continuity across the acquisition flow.

### 3. Serverless Lead Pipeline
For B2B Partner onboarding (restaurants), we bypassed traditional backend overhead by integrating a serverless **EmailJS** pipeline. This allows for instant lead capture and CRM injection directly from the client side, reducing infrastructure costs while maintaining high reliability.

---

## 🛠️ The Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Core** | React 18, TypeScript, Vite |
| **UX & Physics** | Framer Motion (Scroll-linked animations) |
| **Styling System** | Tailwind CSS, Shadcn UI (Primitives) |
| **Internationalization** | i18next, react-i18next |
| **State Management** | React Hooks (Local), TanStack Query (Server) |

---

## ⚡ Local Development

To spin up the acquisition portal locally:

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
    Create a `.env` file to link the serverless email pipeline:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Launch**
    ```bash
    npm run dev
    ```

---

## 📬 Contact & Ecosystem

**Alex Tkachyov** - Co-Founder & CTO
* **Ecosystem:** [ReFreshly Mobile (iOS/Android)](https://refreshly.kz)
* **Connect:** [LinkedIn](https://linkedin.com/in/alexandr-tkachyov)

---


## 📄 License
© 2026 ReFreshly. All rights reserved.
This repository is public for educational and portfolio purposes. 
Commercial usage, modification, or distribution of this code is strictly prohibited.