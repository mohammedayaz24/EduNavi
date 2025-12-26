
# EduNavi

EduNavi is a web application designed to help users explore career paths, get recommendations, and find resources to achieve their career goals. It provides a comprehensive dashboard to visualize career roadmaps, discover internships, and track progress.

## Features

*   **Career Dashboard:** A personalized dashboard to manage your career path.
*   **Interest-Based Recommendations:** Get career suggestions based on your interests.
*   **Detailed Career Roadmaps:** View detailed roadmaps for various careers, including steps and resources.
*   **Internship Finder:** Search and find relevant internship opportunities.
*   **User Profile:** Create and manage your professional profile.
*   **Responsive Design:** Fully responsive and works on all devices.

## Tech Stack

*   **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Package Manager:** [Bun](https://bun.sh/)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [Bun](https://bun.sh/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/EduNavi.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd EduNavi/EduNavi2
    ```
3.  Install the dependencies:
    ```bash
    bun install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
bun run dev
```

Open your browser and navigate to `http://localhost:5173` to see the application.

## Project Structure

The project is organized as follows:

```
EduNavi/
├── EduNavi2/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   └── ...
│   │   ├── context/        # React context providers
│   │   ├── data/           # Mock data
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── pages/          # Application pages
│   │   ├── App.tsx         # Main application component
│   │   └── main.tsx        # Application entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── ...
```

#Live Demo link
    https://edunavi.netlify.app/