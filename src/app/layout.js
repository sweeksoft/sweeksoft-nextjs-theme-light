import '@/styles/global.css'
import CoreNavbar from '@/components/core/navbar'
import CoreFooter from '@/components/core/footer'
import ThemeRegistry from '@/styles/material/ThemeRegistry'
import json from '@/json/pages/home'
import NextThemesProvider from '@/styles/nextThemesProvider'

export const metadata = {
  title: json.meta.title,
  description: json.meta.description,
  keywords: json.meta.keywords,
}

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body>
        <NextThemesProvider>
          <ThemeRegistry>
            <CoreNavbar />
            <main style={{minHeight: '100vh'}}>{children}</main>
            <CoreFooter />
          </ThemeRegistry>
        </NextThemesProvider>
      </body>
    </html>
  )
}
