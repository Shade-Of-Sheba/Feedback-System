import '../app/globals.css';
export const metadata = {
  title: 'Feedback System',
  description: 'Collecting user feedback',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
