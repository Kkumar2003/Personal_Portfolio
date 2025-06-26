
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Pages/AppLayouts';
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects'
import NotFound from './Pages/NotFound';


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/skills',
                element: <Skills />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
        
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export const App = () => {


    return (
        <RouterProvider router={router} />
    );
};
