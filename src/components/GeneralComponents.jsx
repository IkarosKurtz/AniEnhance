import React from 'react';
import ButtonStyles from './Button.module.css';
import CheckboxStyles from './Checkbox.module.css';
import InputStyles from './Input.module.css';

export function Checkbox({ id, name, label }) {
	return (
		<div className={CheckboxStyles.checkbox}>
			<input
				type='checkbox'
				id={id}
				name={id}
				value={true}
			/>
			<label style={{ fontFamily: 'KanitRegular' }}>{label}</label>
		</div>
	);
}

export function Button({ content, event, id }) {
	return (
		<div className={ButtonStyles.button}>
			<button
				className={ButtonStyles.epicButton}
				onClick={event}
				id={id}
				value={true}
			>
				{content ? content : 'button'}
			</button>
		</div>
	);
}

export function Input() {
	return (
		<div className={InputStyles.input_container}>
			<input
				type='text'
				id='SearchAnime'
				className={InputStyles.input}
				placeholder='Type your name'
			></input>
		</div>
	);
}

export function BlankSpace({ blankSpaces }) {
	return (
		<>
			{Array.from({ length: blankSpaces }, (item, index) => {
				return <br key={index} />;
			})}
		</>
	);
}
