import React from 'react';
import Styles from './Checkbox.module.css';

export function Checkbox({ id, name, label }) {
	return (
		<>
			<label className={Styles.checkbox}>
				<input
					type='checkbox'
					id={id}
					name={name}
					value={true}
				/>
				{label}
			</label>
		</>
	);
}
