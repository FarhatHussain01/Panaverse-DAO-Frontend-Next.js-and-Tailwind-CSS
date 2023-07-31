import Wrapper from "../shared/Wrapper"
import HeroPoster from "@/assests/images/Hero-poster.png"
import Image from "next/image"
import Button from "@/components/shared/Button"


// leading is used for line height 
// you can give your custom css using font-[16px] like this

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col items-center md:flex-row mt-5">
                    <div className="flex-1 max-w-xl ">
                        {/* left side */}
                        <h4 className="text-[#00616C] font-semibold text-lg">Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)</h4>
                        <h1 className="text-4xl sm:text-5xl font-bold  md:leading-[54px] text-slate-950 md:text-red-800 lg:text-green-900">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="mt-6 text-lg text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program
                            Getting Ready for the Next Generation of the Internet .</p>
                        <p className="mt-6 text-xl text-slate-600">Consolidating
                            Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge,
                            Ambient Computing/IoT, Network Automation, and Bioinformatics
                            Technologies</p>
                        <div className="mt-6">
                            <Button text= "Learn More" />
                        </div>
                    </div>
                    <div className="flex-1">
                        {/* right side */}
                        <Image src={HeroPoster} alt="Hero Poster" />
                    </div>
                </div>
            </Wrapper>
        </section>

    )
}

export default Hero
