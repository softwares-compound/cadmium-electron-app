import { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginNavbar from './components/custom/navbars/login-navbar';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/custom/sidebar';
import PublicRouteProtector from './services/route-protector/public-route-protector';
import PrivateRouteProtector from './services/route-protector/private-route-protector';
import ProjectPageNavbar from './components/custom/navbars/projects-page-navbar';
import Footer from './components/custom/global/footer';
import { addMessageListener, disconnectWebSocket, removeMessageListener } from './socket/socket';
import { LogTableEntry } from './types/type';
import { useLogStore } from './stores/useLogStore';


// Lazy load pages
const LogAnalysis = lazy(() => import('./pages/dashboard/log-analysis/index'));
const NotFound = lazy(() => import('./pages/not-found/not-found'));
const Login = lazy(() => import('./pages/login/index'));
const Projects = lazy(() => import('./pages/projects/index'));


const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Suspense fallback={<div className='text-center'>Loading...</div>}>
					<PublicRouteProtector>
						<>
							<LoginNavbar />
							<Login />
						</>
					</PublicRouteProtector>
				</Suspense>
			</>
		),
	},
	{
		path: "/login",
		element: (
			<>
				<Suspense fallback={<div className='text-center'>Loading...</div>}>
					<PublicRouteProtector>
						<>
							<LoginNavbar />
							<Login />
						</>
					</PublicRouteProtector>
				</Suspense>
			</>
		),
	},
	{
		path: "/:organization/projects",
		element: (
			<Suspense fallback={<div className='text-center'>Loading...</div>}>
				<PrivateRouteProtector>
					<ProjectPageNavbar />
					<Projects />
				</PrivateRouteProtector>
			</Suspense>
		),
	},
	{
		path: "/:organization/projects/:project_id/log-analysis/:submodule",
		element: (
			<Suspense fallback={<div className='text-center'>Loading...</div>}>
				<PrivateRouteProtector>
					<SidebarProvider >
						<AppSidebar variant='inset' />
						<SidebarInset >
							<LogAnalysis />
						</SidebarInset>
					</SidebarProvider>
					<div className='fixed bottom-0 right-0 bg-sidebar-background w-full '>
						<Footer />
					</div>
				</PrivateRouteProtector>
			</Suspense>
		),
	},
	{
		path: "*",
		element: (
			<>
				{/* <Header /> */}
				<Suspense fallback={<div className='text-center'>Loading...</div>}>
					<NotFound />
				</Suspense>
				{/* <Footer /> */}
			</>
		),
	},
]);

function App() {
	const { appendTableDataToTop, setLogStreamingComplete, setLogStreamingData } = useLogStore();

	/*
	WebSocket message handling for new logs

	This logic is part of the Log Analysis page under the Explorer tab.
	The WebSocket connection and its message handling must be initialized at the root level of the app (in App.tsx).
	This ensures the WebSocket listener is active as soon as the app starts, regardless of whether the Log Analysis -> Explorer tab has been rendered.

	If the WebSocket logic were placed in log-analysis.tsx, it would only listen for messages when the Log Analysis page is rendered,
	which is not desirable for real-time log updates.

	By placing the WebSocket handling here, the app can start listening for WebSocket messages immediately after initialization.
	*/
	useEffect(() => {
		// Define a listener to handle chunks
		const handleChunk = (chunk: any) => {
			if (chunk.action === "new_log") {
				const logTableData: LogTableEntry = {
					id: chunk.data.log_id,
					applicationId: chunk.data.application_id,
					organizationId: chunk.data.raw_log.organization_id.$oid,
					error: chunk.data.raw_log.error,
					url: chunk.data.raw_log.url,
					method: chunk.data.raw_log.method,
					createdAt: chunk.data.raw_log.created_at,
					updatedAt: chunk.data.raw_log.updated_at,
					ragInference: { rag_response: chunk.data.raw_log.ragInference ?? null },
					traceback: chunk.data.raw_log.traceback,
					isStreaming: true,
				}
				setLogStreamingData({
					application_id: "",
					chunk: "",
					log_id: "",
				})
				appendTableDataToTop([logTableData]);
				// Show notification in Electron
				if (window.electronAPI) {
					window.electronAPI.sendMessage('toMain', {
						message: `New log received: ${chunk.data.raw_log.error}`,
					});
				}
			} else if (chunk.action === "stream_log_response") {
				setLogStreamingData({
					application_id: chunk.data.application_id,
					chunk: chunk.data.chunk,
					log_id: chunk.data.log_id,
				});
			} else if (chunk.action === "stream_complete") {
				const log_id = chunk.data.log_id;
				setLogStreamingComplete(log_id);
			} else {
				console.log("Received message from WebSocket:", chunk);
			}
			// setStreamedMessage((prev) => prev + chunk); // Append each chunk to the current message
		};

		// Add the listener
		addMessageListener(handleChunk);

		// Cleanup on component unmount
		return () => {
			removeMessageListener(handleChunk);
			disconnectWebSocket();
		};
	}, []);


	return <RouterProvider router={router} />;
}
export default App;
