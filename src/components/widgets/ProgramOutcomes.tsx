import Wrapper from "../shared/Wrapper"
import Image from "next/image"
import outcome from "@/assests/images/outcome-poster.png"

const ProgramOutcomes = () => {

    const outcomeData = ["Product Ownership", "Freelancing", "Global Marketing by Panaverse DAO", "Boosting Economy"]
    return (

        <section className="my-20 ">
            <Wrapper>
                <div className="flex flex-col-reverse sm:flex-row items-center gap-x-4 flex-1  ">
                    {/* left image */}
                    <div className="mt-4">
                        <Image src={outcome} alt="hello" />
                    </div>

                    {/* right section */}
                    <div className="flex-1 ">
                        <h2 className="text-3xl sm:text-4xl font-bold ">The Outcome for Participants of the Program</h2>
                        <p className="mt-6 text-lg text-slate-600">As a graduate of this program, you will own valuable products
                            such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the
                            Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour,
                            providing a path to financial stability while contributing to the growth of Pakistan's software exports</p>
                        <div className="grid grid-cols-2 mt-6 gap-x-2 gap-y-4">
                            {
                                outcomeData.map((item) => {
                                    return (
                                        <div className="flex gap-x-3 items-center gap-y-2">
                                            <svg className='flex-shrink-0' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.3431 2.65686C20.4673 -0.467337 25.5327 -0.46734 28.6569 2.65685L43.3431 17.3431C46.4673 20.4673 46.4673 25.5327 43.3431 28.6569L28.6569 43.3431C25.5327 46.4673 20.4673 46.4673 17.3431 43.3431L2.65686 28.6569C-0.467337 25.5327 -0.46734 20.4673 2.65685 17.3431L17.3431 2.65686Z" fill="url(#paint0_radial_0_1)" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14 21.9206C16.0707 22.3461 18.734 23.1698 20.75 24.465C23.1178 21.3345 27.371 18.406 32 16C27.6042 20.2739 23.9668 25.1236 21.5 30C19.5118 27.2129 17.3398 24.6189 14 21.9206Z" fill="white" />
                                                <defs>
                                                    <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5455 -9.96429) rotate(59.1918) scale(77.3011 169.686)">
                                                        <stop offset="0.125" stopColor="#00E1F0" />
                                                        <stop offset="1" stopColor="#00616C" />
                                                    </radialGradient>
                                                </defs>
                                            </svg>

                                            <h3 className="font-medium text-lg">{item}</h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default ProgramOutcomes