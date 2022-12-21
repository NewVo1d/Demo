import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Problem from './pages/problem';
import Contest from './pages/contest';
import Status from './pages/status';
import About from './pages/about';
import Layout from './pages/layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <div>Page 1</div>,
			},
			{
				path: '/page2',
				element: <div>Page 2</div>,
			},
		],
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/problem',
		element: <Problem />,
	},
	{
		path: '/contest',
		element: <Contest />,
	},
	{
		path: '/status',
		element: <Status />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '*',
		element: <div>404 Page</div>,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
