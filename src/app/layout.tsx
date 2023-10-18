import AuthProvider from '@/components/AuthProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arena Gastronômica',
  description: 'O melhor restaurante do Brasil.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </body>
    </html>
  )
}
