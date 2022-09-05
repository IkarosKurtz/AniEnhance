import React from 'react';
import Styles from './Content.module.css';

export function Content({ content }) {
	if (!content) return;

	return (
		<div className={Styles.container}>
			<h2>{content.title}</h2>

			{content.texts.map((text, index) => {
				return (
					<P
						text={text}
						key={index}
					/>
				);
			})}
		</div>
	);
}

function P({ text }) {
	return <p>{text}</p>;
}
