# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup Process

Follow these steps to set up the project:

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd Ballers_React-Tailwind
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

5. **Preview the production build:**
   ```sh
   npm run serve
   ```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Structure

- `src/components`: Contains reusable components like `AuthLayout` and `AuthProtector`.
- `src/pages`: Contains page components like `Home`, `Details`, and `Login`.
- `src/App.jsx`: Main application component.
- `src/main.jsx`: Entry point of the application.

## Authentication

The project uses a simple token-based authentication mechanism. The `AuthProtector` component ensures that only authenticated users can access certain routes.

## Routing

The project uses `react-router-dom` for client-side routing. The routes are defined in `src/main.jsx`.

## Styling

The project uses Tailwind CSS for styling. You can customize the styles in `src/index.css`.

## API Integration

The project fetches data from a dummy API (`https://dummyjson.com/products`). You can replace this with your own API endpoints as needed.
