import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

const pages = import.meta.glob('./Pages/**/*.jsx')

createInertiaApp({
  resolve: name => {
    const importer = pages[`./Pages/${name}.jsx`]
    if (!importer) {
      throw new Error(`Unknown Inertia page: Pages/${name}.jsx`)
    }
    return importer()
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
