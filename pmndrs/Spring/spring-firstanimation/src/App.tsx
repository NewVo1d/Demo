import React from 'react';
import { animated, useSpring } from '@react-spring/web';

function App() {
	const [springs, api] = useSpring(() => ({
		x: 0,
		y: 0,
	}));

	const handlerClick = () => {
		api.start({
			from: {
				x: 0,
				y: 0,
			},
			to: {
				x: 100,
				y: 50,
			},
		});
	};

	return (
		<animated.div
			onClick={handlerClick}
			style={{
				width: 80,
				height: 80,
				background: '#ff6d6d',
				borderRadius: 8,
				...springs,
			}}
		/>
	);
}

export default App;
