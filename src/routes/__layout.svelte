<script context="module">
	import sveo from '$lib'

	export const load = async ({ page }) => {
		const { title } = await sveo(page)

		return { props: await sveo(page) }
	}
</script>

<script>
	import '../app.css'

	let props = []
	for (prop in $$props) {
		props.push(prop)
	}

	console.log(props)
</script>

<svelte:head>
	{#each props as prop}
		<meta name={prop} content={$$props[prop]} />
	{/each}
	<title>{$$props['title']} — SVEO</title>
</svelte:head>

<div class="grid">
	{#each props as prop}
		<pre>
		{prop}: {$$props[prop]}
	</pre>
	{/each}
</div>
