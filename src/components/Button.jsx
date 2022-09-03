import React from 'react';
import Styles from './Button.module.css';
export function Button({ content, event }) {
	return (
		<div className={Styles.button}>
			<button
				className={Styles.epicButton}
				onClick={event}
				onKeyDown={event}
			>
				{content ? content : 'button'}
			</button>
		</div>
	);
}
