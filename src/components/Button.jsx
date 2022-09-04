import React from 'react';
import Styles from './Button.module.css';
export function Button({ content, event, id }) {
	return (
		<div className={Styles.button}>
			<button
				className={Styles.epicButton}
				onClick={event}
				onKeyDown={event}
				id={id}
				value={true}
			>
				{content ? content : 'button'}
			</button>
		</div>
	);
}
