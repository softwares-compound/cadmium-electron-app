import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Lazy load pages
// const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/dashboard/dashboard'));
const Projects = lazy(() => import('./pages/projects/projects'));
const Settings = lazy(() => import('./pages/settings/setting'));
const ProtectedRoute = lazy(() => import('./services/protected-route'));
const NotFound = lazy(() => import('./pages/not-found/not-found'));
const Login = lazy(() => import('./pages/login/login'));



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Header /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
        {/* <Footer /> */}
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        {/* <Header /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
        {/* <Footer /> */}
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "Projects",
        element: (
          <Suspense fallback={<div>Loading Projects...</div>}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<div>Loading Settings...</div>}>
            <Settings />
          </Suspense>
        ),
      },
    ],
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
