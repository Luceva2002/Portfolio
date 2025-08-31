import './globals.css'
import type { Metadata } from 'next'
import { Kalam } from 'next/font/google'
import { ThemeProvider } from '../components/ThemeProvider'

const kalam = Kalam({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export const metadata: Metadata = {
  title: 'Luca Evangelista - Portfolio',
  description: 'Portfolio spaziale di Luca Evangelista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={kalam.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
