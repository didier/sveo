# SVEO

Depndency-free approach to declare metadata on SvelteKit pages — for example for SEO.

## Getting started

### Installing

```bash
npm i -D @didiercatz/sveo
```

### Using

Using Sveo is quite simple. Create (or edit) a `__layout.svelte` inside your `routes` folder.

```js
import sveo from '@didiercatz/sveo'

const metadata = await sveo(page)
```

```svelte
<script context="module">
  import sveo from '@didiercatz/sveo'

  export const load = async ({ page }) => {
    // The metadata from the page component
    const { title } = await sveo(page)

    return {
      props: {
        title
      }
    }
  }
</script>
```

Then, in your markup, you can use the `title` property as you please.

```svelte
<!-- __layout.svelte -->

<script>
  export let title
</script>

<h1>{title}</h1>
```

### Options
