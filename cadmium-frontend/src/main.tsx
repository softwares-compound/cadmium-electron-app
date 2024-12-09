import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css';
import App from './App.tsx'
import { ThemeProvider } from './provider/theme-provide.tsx'
import { Toaster } from './components/ui/toaster.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RefreshButton from './components/custom/global/refresh.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
		<QueryClientProvider client={queryClient}>
			<App />
			<RefreshButton />
		</QueryClientProvider>
		<Toaster />
	</ThemeProvider>
)
