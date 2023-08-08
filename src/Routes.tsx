import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
import { Dashboard } from './Dashboard';
import { ErrorPage } from './ErrorPage';
import { CustomError } from './CustomError';
const router = createBrowserRouter([
    { index: true, path: '/', element: <Home />, errorElement: <ErrorPage /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/error/:error', element: <CustomError /> },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
