import '@/styles/globals.css'
import { RootProvider } from '@/components/Provider/RootProvider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PennyWise',
  description: 'your Spending Tracker App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><RootProvider>{children}</RootProvider></body>
    </html>
  )
}
