// TODO: Try to use Vite (or any other approach) to resolve files, as path and fs aren't supported client-side and may cause issues on CSR.
import path from 'path'
import fs from 'fs'

/**
 * Checks all extensions in the given path and returns the first one that exists.
 *
 * @param {*} options
 * @param {String} route The route of the source file
 * @returns
 */
export function getFilePath(options, route) {
	for (let extension of options.extensions) {
		let file = path.resolve(options.routes, route + extension)
		if (fs.existsSync(file)) {
			return import(/* @vite-ignore */ file)
		}
	}
}
