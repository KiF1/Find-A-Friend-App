import './globals.css'

export const metadata = {
  title: 'Find A Friend App',
  description: 'Adopt a Pet',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
