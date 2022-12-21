import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PrimitiveAtom, atom } from 'jotai';
import { useAtom } from 'jotai';

type BoxType = {
	position: [number, number, number];
	click: boolean;
	hover: boolean;
};

const Box: React.FC<{ box: PrimitiveAtom<BoxType> }> = ({ box }) => {
	const [{ position, click, hover }, setBox] = useAtom(box);
	const setClick = (status: boolean) =>
		setBox((prev) => ({ ...prev, click: status }));
	const setHover = (status: boolean) =>
		setBox((prev) => ({ ...prev, hover: status }));

	return (
		<mesh
			scale={click ? 1 : 1.5}
			position={position}
			onClick={() => setClick(!click)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hover ? 'yellow' : 'hotpink'} />
		</mesh>
	);
};

const CanvasContainer: React.FC<{ boxes: PrimitiveAtom<BoxType>[] }> = ({
	boxes,
}) => {
	return (
		<Canvas>
			<ambientLight intensity={0.8} />
			<pointLight
				intensity={0.5}
				position={[50, 50, 50]}
			/>
			{boxes.map((box) => (
				<Box box={box} />
			))}
		</Canvas>
	);
};

function App() {
	const [boxes, setBoxes] = useState<PrimitiveAtom<BoxType>[]>([]);
	const addBox = () => {
		const box = atom<BoxType>({
			position: [6 * Math.random() - 3, 6 * Math.random() - 3, 0],
			click: false,
			hover: false,
		});
		setBoxes((prev: any) => [...prev, box]);
	};

	return (
		<div>
			<button onClick={addBox}>添加</button>
			<CanvasContainer boxes={boxes} />
			<CanvasContainer boxes={boxes} />
		</div>
	);
}

export default App;
