
import ClientOnly from './components/ClientOnly'
import RegisterModel from './components/models/RegisterModel'
// import Modal from './components/models/Models'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import { ToasterProvider } from './providers/ToasterProvider'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar />
          <RegisterModel/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
