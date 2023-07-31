'use client'
import { ThemeProvider } from "next-themes"
import { FC } from "react"

const Provider:FC<{children:React.ReactNode }> = ({children}) => {
  return (
    <div>
        <ThemeProvider enableSystem ={true} attribute="class">
          {children}
        </ThemeProvider>
    </div>
  )
}

export default Provider