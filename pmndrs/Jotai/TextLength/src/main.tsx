import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import TextLength from './pages/TextLength';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/textlength',
		element: <TextLength />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
