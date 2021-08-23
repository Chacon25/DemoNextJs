
import type { AppProps } from 'next/app'
import 'bootswatch/dist/darkly/bootstrap.min.css'



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
