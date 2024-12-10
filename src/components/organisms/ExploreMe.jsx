import Image from "next/image"
import { LinkPreview } from "../molecules/LinkPreview"

const Data = [
    {
        imgUrl: "linkedin.webp",
        name: "LinkedIn"
    },
    {
        imgUrl: "behance.webp",
        name: "Behance"
    },
    {
        imgUrl: "youtube.webp",
        name: "Youtube"
    },
    {
        imgUrl: "notion.webp",
        name: "Notion"
    },
    {
        imgUrl: "gmail.webp",
        name: "Gmail"
    },
    {
        imgUrl: "resume.webp",
        name: "Resume"
    }
]

const ExploreMe = () => {
    return (
        <div className="flex h-fit md:h-[calc(100vh-56px)] md:max-h-[800px] md:min-h-[720px] bg-black w-full">
            <div className="flex flex-col w-full md:h-full md:items-center md:justify-center max-w-7xl mx-auto px-8 md:px-4 py-8 md:py-8 lg:py-10 xl:py-14 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                <span className="w-full text-white text-base/[30px] md:text-xl/[40px] lg:text-3xl/[50px] xl:text-4xl/[60px] ">
                    And that’s me! Curious to see some of&nbsp;<LinkPreview url="https://tailwindcss.com" className="font-extrabold w-fit font-rammettoOne text-white">
                        my designs?
                    </LinkPreview>&nbsp;Maybe check out my&nbsp;<LinkPreview url="https://tailwindcss.com" className="font-extrabold w-fit font-rammettoOne text-white">
                        video edits
                    </LinkPreview>&nbsp;, a wild&nbsp;<LinkPreview url="https://tailwindcss.com" className="font-extrabold w-fit font-rammettoOne text-white">
                        campaign idea
                    </LinkPreview>&nbsp;I whipped up for a random brand, or even my&nbsp;<LinkPreview url="https://tailwindcss.com" className="font-extrabold w-fit font-rammettoOne text-white">
                        (slightly boring) CV?
                    </LinkPreview>
                </span>
                <span className="w-full text-white text-base/[30px] md:text-xl/[40px] lg:text-3xl/[50px] xl:text-4xl/[60px] ">
                    Feel free to &nbsp;<LinkPreview url="https://tailwindcss.com" className="font-extrabold w-fit font-rammettoOne text-white">
                        reach out
                    </LinkPreview>—just a heads-up, I only work on 2nd and
                    4th weekends. 😉
                </span>
                <div className="flex w-full gap-6 md:justify-center items-center flex-wrap">

                    {Data.map((data, i) =>
                        <div key={i} className="flex w-[33%] md:w-[23%] lg:w-[15%]">
                            <div className="flex w-full relative aspect-video">
                                <Image
                                    src={`/assets/logo/${data.imgUrl}`}
                                    alt={data.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExploreMe
