import Image from "next/image";
import React from "react";
import CareerCard from "../molecules/CareerCard";
import MarqueeCard from "../molecules/MarqueeCard";
import { Marquee } from "../molecules/Marquee";

const CareerData = [
    {
        id: 1,
        date: "Jan 2024 - Present",
        role: "Head of Marketing",
        topLine: false,
        bottomLine: true,
        content: [
            "Managed a creative team to drive campaigns and brand growth.",
            "Led marketing strategies, cutting CPL by 47% in 2023 and boosting customer acquisition by 24.9% in 2024.",
            "Oversaw video production and design for ITM, ensuring brand consistency. Increased social media following by 13.5k in 2024.",
        ],
    },
    {
        id: 2,
        date: "Mar 2023 - Dec 2023",
        role: "Assistant Marketing Manager",
        topLine: true,
        bottomLine: true,
        content: [
            "Managed marketing for the B.Tech CSE program, creating visual and video ads under the CEO's guidance.",
            "Led a team of four to deliver creative content on schedule.",
            "Developed content strategies and managed social media, boosting brand engagement.",
        ],
    },
    {
        id: 3,
        date: "May 2022 - Feb 2023",
        role: "Executive - Special Initiatives",
        topLine: true,
        bottomLine: false,
        content: [
            "Led the 'Essentials' free programming education product, driving product management and user engagement.",
            "Leveraged data analysis to enhance user experience and program impact.",
        ],
    },
];

const Career = () => {
    return (
        <div className="flex h-auto md:h-[calc(100vh-56px)] w-full bg-[url('/assets/banner-img/career-banner.webp')] bg-cover md:bg-center">
            <div className="flex flex-col w-full md:h-full max-w-7xl mx-auto px-8 md:px-4 py-6 md:py-8 lg:py-10 xl:py-14 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                <div className="flex w-full">
                    <h2 className="flex text-white w-full text-3xl md:text-4xl lg:text-5xl font-extrabold">
                        My career so far....
                    </h2>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex relative h-14 w-full">
                        <Image
                            src={"/assets/logo/lu-logo.webp"}
                            alt="lu logo"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <div className="flex md:hidden flex-col md:flex-row w-full md:gap-4 md:w-fit">
                        {CareerData.map((career, i) => (
                            <CareerCard key={i} data={career} />
                        ))}
                    </div>
                    <div className="hidden md:flex md:flex-col w-full">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {CareerData.map((career, i) => (
                                <MarqueeCard key={i} data={career} />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
