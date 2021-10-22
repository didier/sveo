<script>
	export let seo = {
		title: '',
		description: '',
		keywords: '',
		image: '',
		url: '',
		twitter: {
			handle: ''
		}
	}
</script>

<svelte:head>
	<title>{seo.title}</title>

	<!-- Regular meta tags -->
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<meta name="image" content={seo.image} />

	<!-- OpenGraph -->
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:url" content={seo.url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={seo.title} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	<meta name="twitter:url" content={seo.url} />
	<meta name="twitter:site" content="@{seo.handle}" />
	<meta name="twitter:creator" content="@{seo.handle}" />
</svelte:head>
