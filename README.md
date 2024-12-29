# Getting Started

Follow these steps to set up and run the Electron + React application:

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for dependency management

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd electron_react_app
   ```

## Directory Structure

Here's a brief overview of the project's structure:

```bash
electron_react_app/
├── dist/                           # Compiled output files
│   ├── main.js                     # Main process compiled code
│   └── preload.js                  # Preload script compiled code
├── logs/                           # Log files
│   ├── combined.log                # Combined log for general information
│   └── error.log                   # Error-specific log
├── package-lock.json               # Dependency lock file
├── package.json                    # Root package configuration
├── public/                         # Static assets for the Electron app
├── cadmium-frontend/                   # React front-end application
│   ├── README.md                   # Documentation for React client
│   ├── eslint.config.js            # ESLint configuration for React app
│   ├── index.html                  # Entry HTML file for the React app
│   ├── package-lock.json           # React app dependency lock file
│   ├── package.json                # React app package configuration
│   ├── public/                     # Public static assets for React app
│   │   └── vite.svg                # Example Vite logo
│   ├── src/                        # React source code
│   │   ├── App.css                 # App-level styles
│   │   ├── App.tsx                 # Main App component
│   │   ├── assets/                 # React client assets
│   │   │   └── react.svg           # React logo example
│   │   ├── index.css               # Global styles
│   │   ├── main.tsx                # Entry point for React app
│   │   ├── pages/                  # React pages/components
│   │   │   └── server-test.tsx     # Example page to test server integration
│   │   ├── types/                  # TypeScript types for React app
│   │   │   └── electron.d.ts       # Electron-related type definitions
│   │   └── vite-env.d.ts           # Vite environment type definitions
│   ├── tsconfig.app.json           # TypeScript configuration for the React app
│   ├── tsconfig.json               # Base TypeScript configuration
│   ├── tsconfig.node.json          # Node-specific TypeScript configuration
│   └── vite.config.ts              # Vite configuration for React app
├── script.sh                       # Helper script for automation
├── src/                            # Backend and Electron main/preload scripts
│   ├── main/                       # Electron main process code
│   │   └── main.ts                 # Main process entry point
│   ├── preload/                    # Electron preload scripts
│   │   └── preload.ts              # Preload script entry point
│   ├── server/                     # Backend for the application
│   │   ├── config/                 # Configuration files
│   │   │   ├── env.ts              # Environment-specific configuration
│   │   │   └── index.ts            # General configuration loader
│   │   ├── controllers/            # Route controllers
│   │   │   └── example-controller.ts # Example controller
│   │   ├── middlewares/            # Middleware functions
│   │   │   ├── cors-option.ts      # CORS configuration
│   │   │   └── logging.ts          # Logging middleware
│   │   ├── models/                 # Models for database operations
│   │   ├── routes/                 # Application routes
│   │   │   └── router.ts           # Main router file
│   │   ├── server.ts               # Express server entry point
│   │   ├── services/               # Service logic
│   │   │   └── example-service.ts  # Example service logic
│   │   └── utils/                  # Utility functions
│   │       └── logger.ts           # Logger utility
│   └── types/                      # TypeScript types for backend
│       └── types.ts                # General type definitions
├── tsconfig.json                   # Root TypeScript configuration
├── webpack.main.config.cjs         # Webpack config for Electron main process
├── webpack.renderer.config.cjs     # Webpack config for Electron renderer process

2. Install dependencies for the Electron app and React client:
   ```bash
   npm install
   cd cadmium-frontend && npm install
   ```

3. Create a `.env` file in the root directory with your environment variables:
   ```bash
   touch .env
   ```
   Add environment-specific variables in the `.env` file, such as API URLs, ports, or secret keys:
   ```
   CORS_ORIGIN=http://localhost:6968
   PORT=6969
   ```

## Explanation of `scripts` in `package.json`

Here are the key `scripts` defined in the root `package.json`:

- `start`: Runs both the Electron app and the React client concurrently using [concurrently](https://www.npmjs.com/package/concurrently).
  - `serve`: Builds the main and renderer processes using Webpack in development mode and then starts the React client.
  - `electron`: Waits for the React client to be available at `http://localhost:6968` and then launches the Electron app.

- `build`: Creates production builds for both the Electron main and renderer processes, and the React client.

- `package`: Packages the Electron app into a distributable format using [electron-builder](https://www.electron.build/).


### `electron`

Launches the Electron app using [wait-on](https://www.npmjs.com/package/wait-on) to wait for the React client to be available at `http://localhost:6968` before launching the Electron app.
```json
"electron": "wait-on http://localhost:6968 && electron .",
```

**Flow**:
1. Uses `wait-on` to check that the React client is available at `http://localhost:6968`.
2. Launches the Electron app:
   ```bash
   electron .
   ```

### `serve`

Builds the main and renderer processes using Webpack in development mode and then starts the React client:
Command:

```bash
webpack --config webpack.main.config.cjs --mode development && \
webpack --config webpack.renderer.config.cjs --mode development && \
cd cadmium-frontend && npm start
```
**Flow**:

Build Electron main process:

```bash
webpack --config webpack.main.config.cjs --mode development
Uses webpack.main.config.cjs to bundle the main.ts file into dist/main.js for development.
```
Build Electron renderer process:
```bash
webpack --config webpack.renderer.config.cjs --mode development
Uses webpack.renderer.config.cjs to bundle preload.ts into dist/preload.js.
```
Start React client:

```bash
cd cadmium-frontend
npm start
```
Launches the React development server (usually on http://localhost:6968).
Outcome:

Builds the Electron app and serves the React front-end.

### `build`

Creates production builds for both Electron and React:

```json
"build": "webpack --config webpack.main.config.cjs --mode production && webpack --config webpack.renderer.config.cjs --mode production && cd cadmium-frontend && npm run build",
```

**Flow**:
1. Builds the Electron main and preload scripts for production:
   ```bash
   webpack --config webpack.main.config.cjs --mode production
   webpack --config webpack.renderer.config.cjs --mode production
   ```

2. Builds the React client for production:
   ```bash
   cd cadmium-frontend && npm run build
   ```



## Development

1. Start the React client:
   ```bash
   cd cadmium-frontend
   npm run dev
   ```

2. In a separate terminal, start the Electron main process:
   ```bash
   cd ..
   npm start
   ```

The Electron app will launch, and the React client will be served within it.



## Production Build

1. Build the React client:
   ```bash
   cd cadmium-frontend
   npm run build
   ```

2. Package the Electron app:
   ```bash
   cd ..
   npm run build
   ```

3. Create a distributable package:
   ```bash
   npm run package
   ```

This will generate the compiled output in the `dist/` directory and a distributable package.


## License

This project is licensed under the [MIT License](LICENSE).
