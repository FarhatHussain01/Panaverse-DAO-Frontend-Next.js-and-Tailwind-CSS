"use client"
import Boxes from "@/components/shared/Boxes"
import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import { programsData } from "@/components/shared/ProgramsData"
import { useState } from "react"
import { log } from "console"

//flex-shrink property to 0, indicating that the flex item should not shrink and maintain its original size.

const SpecializedTrack = () => {

    let [selectedItem, setSelectedItem] = useState("ai")

    const selectedItemData = programsData.find((item) => item.slug === selectedItem)


    return (
        <section>
            <Wrapper>
                {/* Header */}
                <div className="mt-20 ">
                    <h1 className="text-3xl sm:text-5xl font-bold ">Courses Offered </h1>
                </div>

                {/* Left Content */}
                <div className="mt-10 flex flex-col-reverse  gap-x-4 gap-y-8">
                    <div className="border sticky top-24 self-start rounded-md border-slate-200 shadow-md py-8 px-6 basis-8/12">
                        <h4 className="text-primary font-medium text-lg ">Specialized Program</h4>
                        <h3 className="text-2xl sm:max-w-md font-bold mt-2">{selectedItemData?.header}</h3>
                        <p className=" text-xl text-slate-600 mt-3">{selectedItemData?.description}</p>
                        <button className="font-semibold text-xl text-[#00616C] mt-4 underline flex items-end gap-1">Learn More <svg
                            className="mb-1.5" width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" /> </svg>
                        </button>
                        <div className=" flex flex-col sm:flex-row gap-4 mt-8 ">
                            {
                               selectedItemData?.quarters.map((item)=>{
                               return  (<Boxes
                               key={item.number}
                                header={item.header}
                                description={item.description}
                                quarter={item.number}
                                haveBorder={false}
                            />
                               )})

                            }
 
                          
                        </div>
                    </div>
                    {/* Rigth Content */}
                    <div className="px-4 space-y-4  py-6  md:grid md:grid-cols-3 ">

                       

                        {
                            programsData.map((item, i) => {
                                return (
                                    <div onClick={() => setSelectedItem(item.slug)} className="flex items-center gap-x-4 gap-y-12 cursor-pointer">
                                        <div className="flex-shrink-0 h-30 w-38">
                                            {<Image src={item.image} alt="image" className="h-24 object-cover rounded" />}
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-medium ">Specialized Program</h4>
                                            <h3 className="text-lg  font-medium max-w-screen-lg ">{item.header}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }





                    </div>
                </div>

            </Wrapper>
        </section>
    )
}

export default SpecializedTrack