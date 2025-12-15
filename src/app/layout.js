import Footer from './components/Footer'
import {
  Geist,
  Geist_Mono,
  Inter,
  Mansalva,
  Source_Code_Pro
} from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const mansalva = Mansalva({
  variable: '--font-mansalva',
  weight: '400',
  subsets: ['latin']
})

const source_code_pro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'renirenaa',
  description: '<3'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${mansalva.variable} ${source_code_pro.variable} antialiased`}
      >
        <ThemeProvider> {children}</ThemeProvider>
      </body>
    </html>
  )
}
