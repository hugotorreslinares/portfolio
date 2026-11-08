import { readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

const { renderPage } = await import(pathToFileURL('dist-ssr/entry-server.js').href)

const readLocale = async (lng) => ({
  translation: JSON.parse(await readFile(`public/locales/${lng}/translation.json`, 'utf8')),
})
const resources = { en: await readLocale('en'), es: await readLocale('es') }

const placeholder = '<div id="root"></div>'
const template = await readFile('dist/index.html', 'utf8')
if (!template.includes(placeholder)) {
  throw new Error(`Placeholder ${placeholder} not found in dist/index.html`)
}

const appHtml = await renderPage('/', resources)
await writeFile('dist/index.html', template.replace(placeholder, `<div id="root">${appHtml}</div>`))
console.log('Pre-rendered / into dist/index.html')
