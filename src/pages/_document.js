import { Html, Head, Main, NextScript } from 'next/document'

export const metadata = {
  title: 'My App',
}

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Bootstrap CSS CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
     
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Bootstrap JS Bundle CDN (optional) */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
      </body>
    </Html>
  )
}
