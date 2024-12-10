import LogoToolTip from "../molecules/LogoToolTip";

const Tools = [
    {
        cardName: "Photoshop",
        imgUrl: "photoshop.webp",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, maiores repellendus totam ad magnam recusandae officiis",
    },
    {
        cardName: "Meta Ads",
        imgUrl: "meta-ads.webp",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, maiores repellendus totam ad magnam recusandae officiis",
    },
    {
        cardName: "illustrator",
        imgUrl: "illustrator.webp",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, maiores repellendus totam ad magnam recusandae officiis",
    },
    {
        cardName: "Google Ads",
        imgUrl: "google-ads.webp",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, maiores repellendus totam ad magnam recusandae officiis",
    },
    {
        cardName: "Premier Pro",
        imgUrl: "primer-pro.webp",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, maiores repellendus totam ad magnam recusandae officiis",
    },
    {
        cardName: "After Effects",
        imgUrl: "After-eff-logo.webp",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, maiores repellendus totam ad magnam recusandae officiis",
    },
    {
        cardName: "Excel",
        imgUrl: "excel-logo.webp",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, maiores repellendus totam ad magnam recusandae officiis",
    },
];

const ToolsAndSkills = () => {
    return (
        <div className="flex h-auto md:h-[calc(100vh-56px)] md:max-h-[800px] md:min-h-[720px] w-full">
            <div className="flex flex-col w-full md:h-full md:items-center md:justify-center max-w-7xl mx-auto px-4 md:px-4 py-6 md:py-8 lg:py-10 xl:py-14 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                <div className="flex w-full">
                    <h2 className="flex w-full text-3xl md:text-4xl lg:text-5xl font-extrabold">
                        Tools & Skills
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-col w-full">
                    <div className="grid grid-cols-5 md:gap-4 w-full lg:col-span-2">
                        <div className="flex w-full h-full items-end justify-start col-span-2">
                            <LogoToolTip data={Tools[0]} />
                        </div>
                        <div className="flex w-full h-full col-span-2">
                            <LogoToolTip
                                data={Tools[1]}
                                className="w-5/6 h-5/6"
                            />
                        </div>
                        <div className="grid grid-cols-1 h-fit gap-4 w-full">
                            <div className="flex w-full">
                                <LogoToolTip
                                    data={Tools[2]}
                                    className="w-5/6 h-auto"
                                />
                            </div>
                            <div className="flex w-full">
                                <LogoToolTip
                                    data={Tools[3]}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex w-full h-full items-center justify-center">
                            <LogoToolTip
                                data={Tools[4]}
                                className="w-4/5 h-auto"
                            />
                        </div>
                        <div className="flex w-full h-fit justify-end col-span-2">
                            <LogoToolTip
                                data={Tools[5]}
                                className="w-5/6 h-auto aspect-[4/4]"
                            />
                        </div>
                        <div className="flex w-full h-fit col-span-2">
                            <LogoToolTip
                                data={Tools[6]}
                                className="w-5/6 h-auto aspect-[4/4]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-6 lg:gap-8">
                        <span className="h-[1px] md:h-2/3 w-2/3 md:w-[1px] mx-auto md:mx-0 md:my-auto bg-black"></span>
                        <ul className="flex flex-col text-xl md:text-2xl lg:text-3xl gap-4 md:gap-8 w-full items-center justify-center md:items-start">
                            <li className="w-fit flex">
                                <span className="font-medium font-kumbhSans">
                                    Creative Direction
                                </span>
                            </li>
                            <li className="w-fit flex">
                                <span className="font-medium font-kumbhSans">
                                    Digital Marketing Strategy
                                </span>
                            </li>
                            <li className="w-fit flex flex-col">
                                <span className="font-medium font-kumbhSans">
                                    Mass Communication
                                </span>
                                <span>(WhatsApp & Mails)</span>
                            </li>
                            <li className="w-fit flex">
                                <span className="font-medium font-kumbhSans">
                                    Data Analysis
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsAndSkills;
