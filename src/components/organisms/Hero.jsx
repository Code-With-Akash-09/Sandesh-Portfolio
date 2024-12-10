import Image from "next/image";
import RandomPostionText from "../atoms/RandomPostionText";

const Hero = () => {
    return (
        <div className="flex md:h-[calc(100vh-56px)] md:max-h-[800px] md:min-h-[720px]  w-full">
            <div className="flex w-full md:h-full max-w-7xl mx-auto px-4 py-2">
                <div className="grid grid-cols-1 h-fit md:h-full md:grid-cols-2 gap-6 w-full">
                    <div className="flex h-fit pt-4 md:h-full w-full items-center justify-center md:order-2">
                        <div className="flex w-56 h-56 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96  rounded-full bg-black relative max-w-sm">
                            <Image
                                src={"/assets/banner-img/dot-pattern.webp"}
                                alt="user image"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="flex w-full md:h-full md:items-center md:justify-center">
                        <div className="flex gap-2 flex-col max-w-sm md:max-w-3xl mx-auto w-full">
                            <RandomPostionText
                                text={"Digital Marketer"}
                                underline
                                className={" w-2/3"}
                            />
                            <RandomPostionText
                                text={"Meta Ads Expert"}
                                className={"w-full items-end justify-end"}
                            />
                            <RandomPostionText
                                text={"Graphic Designer"}
                                className={"w-3/4 items-end justify-end"}
                            />
                            <RandomPostionText
                                text={"Video Ideator"}
                                underline
                                className={"w-4/5 items-end justify-end"}
                            />
                            <RandomPostionText
                                text={"Video Editor"}
                                className={"w-2/4"}
                            />
                            <RandomPostionText
                                text={"Team Leader"}
                                className={"w-4/5 items-end justify-end"}
                            />
                            <div className="flex w-full py-4 px-2 items-center justify-center">
                                <div className="flex w-full flex-col">
                                    <span className="text-base lg:text-lg font-semibold">
                                        & most importantly
                                    </span>
                                    <span className="font-rammettoOne text-3xl/10 lg:text-4xl/10 xl:text-5xl/10 font-extrabold">
                                        marketing NERD
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
