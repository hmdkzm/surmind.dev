import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme/theme'
import { StoreProvider } from '@/provider/storeProvider'
import Toast from '@/components/common/Toast'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Surmind Studio | Visual Art & Development',
  description: 'Visual Art | Web Experiences | Indie Game Concepts',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AppRouterCacheProvider options={{ key: 'surmind' }}>
          <ThemeProvider theme={theme}>
            <StoreProvider state={{}}>
              <Toast />
              {children}
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
