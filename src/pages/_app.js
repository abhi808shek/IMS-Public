import "@/styles/globals.css";
import "@/styles/Home.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export default function App({ Component, pageProps }) {
  return  <main className={inter.className}>
  <Component {...pageProps} />
</main>;
}
