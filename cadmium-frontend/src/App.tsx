import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginNavbar from './components/custom/navbars/login-navbar';
import PublicRouteProtector from './services/public-route-protector';
import PrivateRouteProtector from './services/private-route-protector';


// Lazy load pages
const Dashboard = lazy(() => import('./pages/dashboard/dashboard'));
const ProtectedRoute = lazy(() => import('./services/private-route-protector'));
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
		path: "/dashboard",
		element: (
			<ProtectedRoute>
				<Suspense fallback={<div>Loading...</div>}>
					<PrivateRouteProtector>
						<Dashboard />
					</PrivateRouteProtector>
				</Suspense>
			</ProtectedRoute>
		),
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
	return <RouterProvider router={router} />;
}
export default App;
