import packageJson from '../../package.json' assert { type: 'json' };

export const capitalizeFirstLetter = (string) => {
	return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export const capitilizeWords = (string) => {
	return string
		.split(' ')
		.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
		.join(' ');
};

export const getProjectName = () => {
	const packageName = packageJson.name.replace(/-|_/gm, ' ').toLowerCase().trim();
	return capitilizeWords(packageName);
};
