import React from 'react';
import { atom, Provider, useAtom } from 'jotai';

const textAtom = atom('hello jotai');
const textLengthAtom = atom((get) => get(textAtom).length);
const textUppercaseAtom = atom((get) => get(textAtom).toUpperCase());

const Input = () => {
	const [text, setText] = useAtom(textAtom);
	return (
		<input
			value={text}
			onChange={(e) => setText(e.target.value)}
		/>
	);
};

const Length = () => {
	const [length] = useAtom(textLengthAtom);
	return <div>Length: {length}</div>;
};

const Uppercase = () => {
	const [uppercase] = useAtom(textUppercaseAtom);
	return <div>Uppercase: {uppercase}</div>;
};

const TextLength = () => {
	return (
		<Provider>
			<Input />
			<Length />
			<Uppercase />
		</Provider>
	);
};

export default TextLength;
