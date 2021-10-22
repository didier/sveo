// let { content, markup, filename, attributes, lang, dependencies } = await getTagInfo(svelteFile)

import * as svelte from 'svelte/compiler'

export default (source, ...args) => ({
	script: (file) => {
		const { content, attributes, markup, filename } = file
		if (attributes.context !== 'module') return
		if (!content.includes('export const metadata = ')) return

		const safeContent = content.replace('export const metadata = ', '')

		// const extractMetadata = new Function(`
		// "use strict";

		// ${safeContent}

		// return metadata
		// `)
		// const { js } = svelte.compile(filename)
		// console.log(js)

		const extractMetadata = (content) => JSON.parse(content)
		console.log(extractMetadata(safeContent))
		// const metadata = extractMetadata(safeContent)
		// const parsed = JSON.parse(metadata)
		// console.log(metadata, parsed)
		// console.log(filename, safeContent)
		return { code: safeContent }
	}
})
