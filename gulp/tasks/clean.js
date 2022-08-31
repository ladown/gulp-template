export const clean = async () => {
	return await app.plugins.deleteSync(app.paths.clean);
};
