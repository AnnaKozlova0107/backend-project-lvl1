import readlineSync from 'readline-sync';
export const greeting = () => {
	const userName = readlineSync.question('May I have you name? ');
	console.log('Hello, '+ userName + '!');
	};
