import { h } from 'preact';

/**
 * This method creates a chatbot avatar a given URL
 */
export function Avatar(props) {
	
	return (
		<img
			className="cognigy-chat-bot-avatar"
			src={props.imageUrl}
			style={ props.style }
		/>
	)
}