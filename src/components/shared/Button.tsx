import { FC } from "react"


// if you dont want to use props.text simply destructure it using {text} now you only use {text}
//let {text} = props;
// hover:scale is used for increasing the size 

const Button:FC<{text: string}>= ({text}) => {
  return (
    <div>
        <button className="bg-[#00616C] py-3 px-6 rounded-full text-white
         hover:shadow-lg text-lg font-medium hover:scale-105 duration-300">{text}</button>
    </div>
  )
}

export default Button