export default async function sveo(
  page,
  options = {
    routes: '../../src/routes'
  }
) {
  // Grab the route path from the $page store
  let slug = page.path.split('/')[1] || 'index'

  // Import the source file for the route
  let source = await import(/* @vite-ignore */ `${options.routes}/${slug}.svelte`)

  // Clone the module
  let _module = { ...source }

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
    _module[keyword] = null
    delete _module[keyword]
  }

  return _module
}
