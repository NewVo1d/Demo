import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div>
			Layout Page
			<div>
				<Link to={'/page1'}>Page 1</Link>
				<Link to={'/page2'}>Page 2</Link>
			</div>
			<Outlet />
		</div>
	);
}

export default Layout;
