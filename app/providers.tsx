import { type PropsWithChildren } from 'react'
import ReactQueryProvider from '@/providers/react-query-provider'
import { ThemeProvider } from '@/providers/theme-provider'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  )
}
