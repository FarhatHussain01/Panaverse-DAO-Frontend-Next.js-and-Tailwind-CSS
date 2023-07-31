import { FC } from "react"
import Wrapper from "./Wrapper"

interface Props {
  header:string ,
   description:string ,
   quarter:number ,
   haveBorder?:Boolean
  //  HaveBorder is used if it is true then add border else not
}

// by default haveBorder is true

const Boxes:FC<Props>=({header,description,quarter, haveBorder = true}) => {
  return (
    <>
        <div className={`mt-10 rounded-md py-12 px-5 relative flex-1 flex flex-col justify-center ${haveBorder ===true ? "border" : ""}`}>
      <h4 className="font-bold">{header}</h4>
      <p>{description}</p>
      <span className="absolute -top-2 text-slate-200 right-14 font-bold text-9xl -z-10">{quarter}</span>
      </div>
        </>
  )
}

export default Boxes