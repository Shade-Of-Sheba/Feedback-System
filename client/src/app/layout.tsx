// /client/src/app/layout.tsx
import './globals.css'
import TidioScript from '../components/TidioScript'

export const metadata = {
  title: 'Feedback System',
  description: 'Collect and respond to feedback in real-time',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TidioScript />
        {children}
      </body>
    </html>
  )
}
