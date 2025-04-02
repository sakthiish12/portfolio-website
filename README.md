# Sakthiish Vijayadass - Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository contains the code for my personal portfolio website, showcasing my skills, projects, and experience as a Software Developer & Solutions Architect.

## Live Demo

**(Link to your deployed website - e.g., https://your-domain.com)**

## Screenshots

**(Consider adding a screenshot or GIF here to give a quick visual overview)**

## Description

A modern, responsive portfolio built with Next.js and Tailwind CSS, featuring:

*   An introduction and overview of skills.
*   Detailed project showcase with descriptions and tags.
*   An interactive 3D "Skills Galaxy" visualization using React Three Fiber.
*   A functional contact form integrated with Formspree.

## Key Features

*   **Responsive Design:** Adapts seamlessly to desktop, tablet, and mobile devices.
*   **Interactive Elements:** Engaging animations and 3D visualization.
*   **Component-Based:** Built with reusable React components.
*   **Performant:** Leverages Next.js features like optimized font loading and dynamic imports.
*   **Dark Mode:** (If applicable - currently uses `dark:bg-gray-900` etc.)
*   **Working Contact Form:** Allows visitors to send messages directly via Formspree.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **3D Visualization:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [Drei](https://github.com/pmndrs/drei)
*   **Form Handling:** [Formspree](https://formspree.io/)
*   **Deployment:** (e.g., Vercel, Netlify)

## Getting Started (Local Development)

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git # Replace with your repo URL
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Configuration

*   **Contact Form:** The contact form uses Formspree. The endpoint URL is currently hardcoded in `src/components/ContactSection.tsx`. If you fork this project, remember to create your own Formspree endpoint and replace the URL.
*   **(Optional) Environment Variables:** If you add any API keys or other sensitive information later, create a `.env.local` file in the root directory and add them there (e.g., `NEXT_PUBLIC_SOME_KEY=your_value`). Remember to add `.env.local` to your `.gitignore` file.

## Deployment

This Next.js application is ready for deployment on platforms like:

*   [Vercel](https://vercel.com/) (Recommended, from the creators of Next.js)
*   [Netlify](https://www.netlify.com/)

Connect your Git repository to one of these platforms for easy continuous deployment.

---

*Developed by Sakthiish Vijayadass*
