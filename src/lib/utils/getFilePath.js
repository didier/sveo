/**
 * Checks all extensions in the given path and returns the first one that exists.
 *
 * @param {*} options
 * @param {String} route The route of the source file
 * @returns
 */
export async function getFilePath(options, route, url) {
	for (let extension of options.extensions) {
		let file = await import(/* @vite-ignore */ `${url}routes/${route}${extension}`)
		if (file) return file
	}
}
