# Book Search App

This project is a React application that allows users to search for books using the Open Library API and add them to a personal bookshelf stored in localStorage.

## Features

- Search for books in real-time as you type
- Display search results in a list of cards
- Add books from the search results to a personal bookshelf
- View and manage the personal bookshelf

## Tech Stack

- React
- React Router
- Axios for API requests
- Tailwind CSS for styling
- Vite for build tool and development server

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/book-search-app.git
    cd book-search-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Install Tailwind CSS:

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

4. Configure Tailwind to remove unused styles in production by adding the following to your `tailwind.config.js`:

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

5. Add the Tailwind directives to your CSS file (`src/index.css`):

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to:

    ```
    http://localhost:5174/
    ```

### Deployment

This application can be deployed on Vercel.

1. Build the application:

    ```bash
    npm run build
    ```

2. Push your code to GitHub if it's not already there:

    ```bash
    git add .
    git commit -m "Initial commit"
    git push origin main
    ```

3. Deploy to Vercel:

    - Go to [Vercel](https://vercel.com) and sign up if you haven't already.
    - Click on the "New Project" button.
    - Import your repository from GitHub.
    - Follow the prompts to configure your project.
    - Once configured, Vercel will automatically build and deploy your project.

### Project Structure

