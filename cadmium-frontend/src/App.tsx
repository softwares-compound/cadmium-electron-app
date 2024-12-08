import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginNavbar from './components/custom/navbars/login-navbar';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/custom/sidebar';
import PublicRouteProtector from './services/public-route-protector';
import PrivateRouteProtector from './services/private-route-protector';


// Lazy load pages
const Projects = lazy(() => import('./pages/projects'));
const NotFound = lazy(() => import('./pages/not-found/not-found'));
const Login = lazy(() => import('./pages/login/index'));


const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Suspense fallback={<div>Loading...</div>}>
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
				<Suspense fallback={<div>Loading...</div>}>
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
			<Suspense fallback={<div>Loading...</div>}>
				<PrivateRouteProtector>
					<SidebarProvider >
						<AppSidebar variant='inset' />
						<SidebarInset >
							<Projects />
						</SidebarInset>
					</SidebarProvider>
				</PrivateRouteProtector>
			</Suspense>
		),
		children: [
			{
				path: "/:project_id",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<PrivateRouteProtector>
							<SidebarProvider >
								<AppSidebar variant='inset' />
								<SidebarInset >
									<Projects />
								</SidebarInset>
							</SidebarProvider>
						</PrivateRouteProtector>
					</Suspense>
				),
			}
		]
	},
	{
		path: "*",
		element: (
			<>
				{/* <Header /> */}
				<Suspense fallback={<div>Loading...</div>}>
					<NotFound />
				</Suspense>
				{/* <Footer /> */}
			</>
		),
	},
]);

function App() {
	console.log(window.location.href);
	return <RouterProvider router={router} />;
}
export default App;
