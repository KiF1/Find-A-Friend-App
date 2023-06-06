import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJanjuree } from 'next/font/google'

export const metadata = {
  title: 'Find A Friend App',
  description: 'Adopt a Pet',
}

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJanjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>{children}</body>
    </html>
  )
}
