import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';

const router = createBrowserRouter([
    { index: true, path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
