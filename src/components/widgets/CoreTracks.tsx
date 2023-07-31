import Wrapper from "@/components/shared/Wrapper"
import Button from "@/components/shared/Button"
import Boxes from "@/components/shared/Boxes"
import { CoreTrackData } from "@/components/shared/CoreTrackData"


// whitespace-pre-line    // use this for line break in the required tag
// whitespace-pre-wrap is more suitable

const CoreTracks = () => {

  const heading = "Core Courses \n (Common in All Specializations)"
  return (
    <section className="mt-16 lg:mt-32">
      <Wrapper>
        <div className="max-w-xl" >
          <h4 className="text-[#00616C] font-semibold text-lg">PROGRAM OF STUDIES</h4>
          <h2 className="text-3xl sm:text-4xl font-bold  text-slate-950 md:text-red-800 lg:text-green-900 whitespace-pre-line" >{heading}</h2>
          <p className="mt-3 text-xl text-slate-600"> Every participant of the program will start by completing the
            following three core courses:</p>
        </div>
        <div className="mt-5">
          <Button text={"Learn More"} />
        </div>

        {/* Create Boxex */}
        <div className="flex flex-col md:flex-row gap-x-8 items-stretch gap-y-6">
          {/* <div className="my-10 border rounded-md w-4/12 py-12 px-5 relative">
      <h4>Quarter 1</h4>
      <p>CS-101: Object-Oriented Programming using TypeScript</p>
      <span className="absolute top-0 text-slate-200 right-14 font-bold text-9xl -z-10">1</span>
   </div> */}

          {/* <Boxes
heading ="Quarter I"
description="CS-101: Object-Oriented Programming using TypeScript"
quarter={1}
/>

<Boxes
heading ="Quarter II"
description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
quarter={2}
/>

<Boxes
heading ="Quarter III"
description="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
quarter={3}
/> */}

          {
            CoreTrackData.map((item , i) => {
              return (
                // key is always present in the parent element and it has always the unique value
   
   
                <Boxes
                  key={item.number}
                  header={item.header}
                  description={item.description}
                  quarter={i + 1}
                />
               
              )
            })
          }
        </div>

      </Wrapper>
    </section>
  )
}

export default CoreTracks