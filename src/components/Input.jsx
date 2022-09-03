import React from 'react';
import Styles from './Input.module.css';

export function Input() {
	return (
		<div className={Styles.input_container}>
			<input
				type='text'
				id='SearchAnime'
				className={Styles.input}
				placeholder='Type your name'
			></input>
		</div>
	);
}
