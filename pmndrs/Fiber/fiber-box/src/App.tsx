import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';

const Box = (props: any) => {
	const [click, setClick] = useState(false);
	const [hover, setHover] = useState(false);

	return (
		<mesh
			{...props}
			scale={click ? 1 : 1.5}
			onClick={() => setClick(!click)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hover ? 'hotpink' : 'yellow'} />
		</mesh>
	);
};

function App() {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<spotLight
				intensity={0.7}
				position={[10, 10, 10]}
				angle={0.15}
				penumbra={1}
			/>
			<pointLight position={[-10, -10, -10]} />
			<Box position={[1, 0, 0]} />
			<Box position={[-1, 0, 0]} />
		</Canvas>
	);
}

export default App;
