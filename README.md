# NextGear — Remontada Next.js Assessment Task

NextGear is a modern, responsive hardware & developer peripherals web application built with **Next.js (App Router)**, **Tailwind CSS + DaisyUI**, **React Hook Form**, **Framer Motion**, and **Firebase Authentication**.

## Key Features
- **7-Section Landing Page (`/`)**: Sticky responsive Navbar, Hero section, Why Choose Us features, Featured Products grid, Customer Testimonials, Promotional CTA Banner, and Footer.
- **Dynamic Catalog & Multi-Field Filtering (`/items`)**: Live keyword search combined with Category, Price Range, and Minimum Rating filters across 6+ products.
- **Dynamic Item Details (`/items/[id]`)**: Full product overview, technical specifications, metadata badges, and related items.
- **Firebase Authentication (`/login`, `/register`)**: Email & Password authentication and Google Sign-In powered by Firebase Context API.
- **Protected Inventory Routes (`/items/add`, `/items/manage`)**: Route guards that redirect unauthenticated users to `/login`, React Hook Form validation, Toast notifications, and real-time `localStorage` persistence.

## Setup & Installation Instructions

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/remontada-nextgear.git](https://github.com/your-username/remontada-nextgear.git)
   cd remontada-nextgear