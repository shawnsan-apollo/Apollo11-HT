import 'vite/modulepreload-polyfill'
import { initDisclosureWidgets } from '@/lib/a11y'
import { revive, islands } from '@/lib/revive.js'

const summaries = document.querySelectorAll('[id^="Details-"] summary')

revive(islands)
initDisclosureWidgets(summaries)

const modules = import.meta.glob(['../store/**/scripts/*.js'])

for (const path in modules) {
  if (!path.includes('core')) {
    modules[path]() // this imports the module and runs any code at the top level of the module
  }
}
