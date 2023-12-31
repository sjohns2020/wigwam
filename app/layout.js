
import BlackNavbar from './(components)/navbar/BlackNavbar'
import './globals.css'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Camp Wigwam',
  description: 'Test Site',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <BlackNavbar />
          <div> {children} </div>
        </div>
      </body>
    </html>
  )
}
