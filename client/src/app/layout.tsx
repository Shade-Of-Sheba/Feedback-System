import '../app/globals.css';


export const metadata = {
  title: 'Feedback System',
  description: 'Collecting user feedback',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-gray-900">
       
          <div className="fixed top-4 right-4 z-50">
         
          </div>
          {children}
       
      </body>
    </html>
  );
}