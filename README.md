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
    const { title, description } = await sveo(page)

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
  export const title = 'Hello world'
  export const description = 'Have a wonderful day.'
</script>
```

### Options

| `options` | default            | Purpose                                     |
| --------- | ------------------ | ------------------------------------------- |
| `routes`  | `../../src/routes` | The folder containing your SvelteKit routes |

## License

[MIT](https://github.com/didier/sveo/blob/main/LICENSE)
