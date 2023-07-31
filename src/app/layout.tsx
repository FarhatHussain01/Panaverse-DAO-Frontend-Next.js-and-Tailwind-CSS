import Footer from '@/components/layout/Footer'
import './globals.css'
import Header from  "@/components/layout/Header"
import Provider from '@/components/shared/Provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head/>
      <body>
        {/* {Header} */}
        <Provider>
        <Header/>
        <Footer/>
        </Provider>
        {children}</body>
    </html>
  )
}
