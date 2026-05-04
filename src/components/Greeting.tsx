import { useState } from 'preact/hooks';

type IProps = {
	messages: string[];
};

export default function Greeting({ messages }: IProps) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);
	console.log(greeting);
	return (
		<div>
			<h3>{greeting}! Thank you for visiting!</h3>
			<button onClick={() => setGreeting(randomMessage())}>
				New Greeting
			</button>
		</div>
	);
}
