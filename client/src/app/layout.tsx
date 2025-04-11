import './globals.css' // Assuming `globals.css` should still be from the `client/src` folder
import TidioScript from '../components/TidioScript'

export const metadata = {
  title: 'Feedback System',
  description: 'Collect and respond to feedback in real-time', // You might want to keep the original description
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-gray-900">  {/* Keeping the background styles from the dashboard branch */}
        <TidioScript />  {/* Keeping the TidioScript component */}
        <div className="fixed top-4 right-4 z-50">
          {/* You can add any elements or notifications here if needed */}
        </div>
        {children}
      </body>
    </html>
  )
}
