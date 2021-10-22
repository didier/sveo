<script context="module">
	import { metadata } from '@didiercatz/sveo'
	// import { metadata } from '$lib'

	export const load = async ({ page }) => {
		const seo = await metadata(page, {
			extensions: ['.svelte', '.md']
		})

		return { props: { seo } }
	}
</script>

<script>
	import Sveo from '$lib'

	export let seo = {
		description:
			'Dependency-free approach to declare metadata on SvelteKit pages — for example for SEO.'
	}

	import '../app.css'
</script>

<Sveo {seo} />

<div class="container mx-auto py-40 grid gap-8">
	<ul clas="p-4 bg-gray-100">
		{#each ['', 'test'] as route}
			<li>
				<a href={route}>/{route}</a>
			</li>
		{/each}
	</ul>

	<slot />
</div>
