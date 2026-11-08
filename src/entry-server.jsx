import { Writable } from 'node:stream'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import App from './App.jsx'

export async function renderPage(url, resources) {
  const i18n = i18next.createInstance()
  await i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources,
    interpolation: { escapeValue: false },
    initImmediate: false,
  })

  return new Promise((resolve, reject) => {
    const chunks = []
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        chunks.push(chunk)
        callback()
      },
    })
    sink.on('finish', () => resolve(Buffer.concat(chunks).toString('utf8')))

    const { pipe } = renderToPipeableStream(
      <I18nextProvider i18n={i18n}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </I18nextProvider>,
      {
        onAllReady() {
          pipe(sink)
        },
        onError(error) {
          reject(error)
        },
      },
    )
  })
}
