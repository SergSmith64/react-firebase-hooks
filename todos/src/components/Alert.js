import React from 'react';

export const Alert = ({alert}) => {

	// __ проверка алерта: если алерта нет - вывожу NULL __
	if (!alert) {
		return null
	}
	
	return (
		// __ тип алерта будет передаваться динамически __
		// __ вот так:  {`alert alert-${alert.type || 'warning'} __
		<div class={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
			<strong>Внимание!</strong>
			{alert.text}
			<button type="button" class="close" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	)
}