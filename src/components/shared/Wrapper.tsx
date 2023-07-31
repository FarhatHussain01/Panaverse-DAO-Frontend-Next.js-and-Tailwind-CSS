import { FC } from "react"


// FC means its a functional Component
// when we use the type raect.reactnode then we can pass any type of props 
// Tailwind css has default breakpoints but first we handle mobile screens by default
// search tailwind css breakpoints on google


const Wrapper:FC<{children:React.ReactNode }> = ({children}) => {
  return (
    <div className="max-w-screen-xl mx-auto  px-4">
        {children}
    </div>
  )
}

export default Wrapper


// React.ReactNode is a type in React that represents the type of children that a React component can accept. 
// It is a union type that includes various types of valid React nodes, such as JSX elements, strings, numbers, 
// arrays, fragments, portals, and null.