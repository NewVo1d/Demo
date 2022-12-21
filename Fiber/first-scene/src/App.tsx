import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
	return (
		<div>
			<Canvas>
				<OrbitControls />
				<axesHelper scale={100} />
				<ambientLight intensity={0.1} />
				<directionalLight
					color='red'
					position={[0, 0, 5]}
				/>
				<mesh>
					<boxGeometry args={[2, 2, 2]} />
					<meshStandardMaterial />
				</mesh>
			</Canvas>
		</div>
	);
}

export default App;
