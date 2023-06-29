
import ClientOnly from './components/ClientOnly'
import RegisterModel from './components/models/RegisterModel'
// import Modal from './components/models/Models'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import { ToasterProvider } from './providers/ToasterProvider'
import LoginModel from './components/models/LoginModel'
import getCurrentUser from './actions/getCurrentUsers'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          <RegisterModel/>
          <LoginModel />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
