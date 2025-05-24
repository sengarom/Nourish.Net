# Nourish.Net 🍽️

## Connecting Surplus Food with Those Who Need It Most

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Nourish.Net is a web application designed to bridge the gap between food surplus and food insecurity. It provides a platform for donors (restaurants, stores, individuals) to easily donate excess food, and for charities and NGOs to find and receive these donations for distribution to those in need.

## ✨ Features

*   **For Donors:**
    *   Seamlessly list surplus food items.
    *   Specify food details (type, quantity, expiry).
    *   Schedule convenient pickup times.
    *   Select preferred NGOs or charities for donation.
*   **For Charities/NGOs:**
    *   Browse available food donations in their area.
    *   Connect with donors to arrange food collection.
*   **User-Friendly Interface:** Built with modern UI components for an intuitive experience.

## 🚀 Tech Stack

*   **Frontend:** React, TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **UI Components:** Shadcn UI
*   **Routing:** React Router DOM
*   **State Management (Data Fetching):** TanStack Query (React Query)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nourish.net.git # Replace with your actual repo URL if applicable
    cd nourish.net
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

### Running the Development Server

1.  **Start the Vite development server:**
    ```bash
    npm run dev
    ```
    This will typically start the application on `http://localhost:3000` and automatically open it in your default browser.

### Other Available Scripts

*   **Build for production:**
    ```bash
    npm run build
    ```
*   **Lint the project:**
    ```bash
    npm run lint
    ```
*   **Preview the production build locally:**
    ```bash
    npm run preview
    ```

## 📂 Project Structure

```
Nourish.Net/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components (general & Shadcn UI)
│   │   ├── ui/            # Shadcn UI specific components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page-level components (routed views)
│   ├── App.tsx            # Main application component with routing
│   ├── main.tsx           # Application entry point (Vite)
│   └── index.css          # Global styles and Tailwind directives
├── index.html             # Main HTML file for Vite
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies and scripts
└── README.md              # This file
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

Made with ❤️ for a better world.
