import packedJson from '../../package.json' assert { type: 'json' };

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const setProjectName = () => {
	return packedJson.name
		.replace(/-|_/gm, ' ')
		.toLowerCase()
		.trim()
		.split(' ')
		.map((el) => capitalizeFirstLetter(el))
		.join(' ');
};
