# TrainingReact.js
1. **Create a new React app without TypeScript template**:
   npx create-react-app my-first-app
   cd my-first-app

2. **Install necessary TypeScript packages**:
   npm install --save typescript@4.9.5 @types/node@18.11.0 @types/react@18.0.0 @types/react-dom@18.0.0 @types/jest@28.1.6

3. **Add TypeScript configuration**:
   Create a `tsconfig.json` file in the root of your project with the following content:
   {
     "compilerOptions": {
       "target": "es5",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true,
       "strict": true,
       "forceConsistentCasingInFileNames": true,
       "noFallthroughCasesInSwitch": true,
       "module": "esnext",
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx"
     },
     "include": ["src"]
   }

4. **Rename files to TypeScript**:
   - Rename `src/index.js` to `src/index.tsx`
   - Rename `src/App.js` to `src/App.tsx`

5. **Install necessary React packages**:
   npm install --save react@18.2.0 react-dom@18.2.0 @testing-library/react@13.4.0 react-scripts@latest

6. **Install web-vitals** as a development dependency:
   npm install --save-dev web-vitals


7. App.tsx:
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';

    const App: React.FC = () => {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    );
    }

    export default App;

8. Index.tsx:
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';

    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();

9. Create a declaration file:
    react-app-env.d.ts
    /// <reference types="react-scripts" />
    declare module "*.svg" {
        const content: string;
        export default content;
    }

10. **Run the TypeScript compiler** to check for any issues:
   npx tsc --noEmit

11. **Start your development server**:
   npm start

12. Install Test Package
   npm install @testing-library/jest-dom


13. Install Lastes Comand after Edit All of js to ts file
   npm install @testing-library/jest-dom@^5.16.5 @testing-library/react@^13.4.0 @testing-library/user-event@^13.5.0 @types/node@^16.18.23 @types/react@^18.0.28 @types/react-dom@^18.0.11 react@^18.2.0 react-dom@^18.2.0 react-scripts@5.0.1 web-vitals@^2.1.4
