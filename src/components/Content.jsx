import React from 'react';
import Styles from './Content.module.css';
export function Content({ title, content }) {
	return (
		<div className={Styles.container}>
			<h2>{title ? title : 'TITULO'}</h2>
			<p>
				{content
					? content
					: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, error? Voluptatem, enim eum. Voluptatem doloribus ex placeat, nisi praesentium rem maiores! Beatae, praesentium quibusdam aliquam cupiditate et natus fuga cumque?'}
			</p>
		</div>
	);
}
