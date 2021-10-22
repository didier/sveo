import { getFilePath } from '$lib/utils'

/**
 * @param {import('@sveltejs/kit').Page} page
 * @param {*} config
 * @returns Metadata
 */
export async function metadata(page, config = {}) {
	const options = {
		routes: config.routes || 'src/routes',
		extensions: config.extensions || ['.svelte', '.md', '.svx']
	}

	// Grab the route path from the $page store
	const route = page.path.split('/')[1] || 'index'

	// Import the source file for the route
	let source = await getFilePath(options, route)

	// Clone the module
	let module = { ...source.metadata }
	// Garbage collect the module
	source = undefined

	/**
	 * Unsafe keys to remove from the target object
	 */
	const unsafes = [
		'default',
		'__esModule',
		'prerender',
		'hydrate',
		'router',
		'[Symbol(Symbol.toStringTag)]'
	]

	// Remove unsafe keys from the module
	for (const keyword of unsafes) {
		module[keyword] = null
		delete module[keyword]
	}

	return module
}
