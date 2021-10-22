# SVEO

Dependency-free approach to declare metadata on SvelteKit pages — for example for SEO.

- Enables you to pass data from page components to `__layout.svelte`
- :white_check_mark: Works with MDSveX out of the box.
- `Sveo` component for easy templating of meta tags, Twitter cards, OpenGraph, etc.

## Getting started

### Installing

```bash
npm i -D @didiercatz/sveo
```

### Using

Using Sveo is quite simple. Create (or edit) a `__layout.svelte` inside your `routes` folder.

```js
import { metadata } from '@didiercatz/sveo'

const seo = await metadata(page)
```

```svelte
<script context="module">
  import { metadata } from '@didiercatz/sveo'

  export const load = async ({ page }) => {
    // The metadata from the page component
    const { title, description } = await metadata(page)

    return {
      props: {
        title,
        description
      }
    }
  }
</script>
```

Then, in your markup, you can use the `title` property as you please.

```svelte
<!-- __layout[.reset].svelte -->

<script>
  export let title
  export let description
</script>

<h1>{title}</h1>
<p>{description}</p>
```

Finally, you can define metadata in your route's `<script module="context">`:

```svelte
<script module="context">
  export const metadata = {
    title: 'Hello world',
    description: 'Have a wonderful day.'
  }
</script>
```

### Sveo component

While using the `metadata` function is a nice way to grab data from your page components, `sveo` also comes with a more full-fledged component that automatically templates your SEO stuff like meta tags, page titles, Twitter cards, etc.

```svelte
<!-- __layout[.reset].svelte -->
<script context="module">
  import { metadata } from '@didiercatz/sveo'

  export const load = async ({ page }) => {
    const seo = await metadata(page)

    return {
      props: { seo }
    }
  }
</script>

<script>
  import Sveo from '@didiercatz/sveo'

  export let seo = {
    // You could even fill in some defaults here.
  }
</script>

<Sveo {seo}/>
```

### Options

| `options` | default      | Purpose                                     |
| --------- | ------------ | ------------------------------------------- |
| `routes`  | `src/routes` | The folder containing your SvelteKit routes |

## License

[MIT](https://github.com/didier/sveo/blob/main/LICENSE)
