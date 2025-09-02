# React TypeScript Demo

A barebone React application built with TypeScript, demonstrating modern React development concepts and practices.

## Features

- **React Components**: Modular, reusable UI components with TypeScript interfaces
- **State Management**: Using React hooks (useState) for managing component state  
- **TypeScript Support**: Type-safe development with interfaces and strong typing
- **Interactive Elements**: Counter demo and color changer showcasing event handling
- **Responsive Design**: Modern CSS with responsive design and smooth animations
- **Professional Build**: Built with npm and optimized for production

## React Concepts Demonstrated

- Functional components with TypeScript
- useState hook for state management
- Props and event handling
- Component composition
- CSS modules and styling
- TypeScript interfaces and type safety

## Local Development

### Prerequisites

- Node.js (version 16 or later)
- npm (comes with Node.js)

### Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd copilot-sandbox
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

This will start the development server at `http://localhost:3000`. The page will automatically reload if you make changes to the code.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner in interactive watch mode
- `npm run eject` - **Note: this is a one-way operation. Once you eject, you can't go back!**

### Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory, optimized and ready for deployment.

## GitHub Pages Deployment

This repository is configured for automatic GitHub Pages deployment using GitHub Actions. The React app will be automatically built and deployed when changes are pushed to the `main` branch.

### Deployment Process

1. The workflow installs Node.js and npm dependencies
2. Builds the React application using `npm run build`
3. Deploys the built files to GitHub Pages

Your site will be available at: `https://[username].github.io/[repository-name]`

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── WelcomeSection.tsx # Hero section with welcome message
│   ├── Counter.tsx      # Counter demo component
│   └── ColorChanger.tsx # Color changing demo
├── App.tsx              # Main application component
├── App.css              # Application styles
├── index.tsx            # React DOM render entry point
└── index.css            # Global styles
public/
├── index.html           # HTML template
build/                   # Production build output (created after npm run build)
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Styling with modern features
- **npm** - Package management and build tool
- **GitHub Actions** - CI/CD for deployment