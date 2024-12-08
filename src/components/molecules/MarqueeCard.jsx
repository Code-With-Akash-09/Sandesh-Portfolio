import React from "react";
import BlurCard from "../atoms/BlurCard";

const MarqueeCard = ({ data }) => {
    return (
        <div className="w-96 lg:w-[480px] flex flex-col">
            <BlurCard data={data} />
            <div className="flex flex-col items-center justify-center w-full">
                <span className="h-10 w-[1px] bg-white"></span>
                {data.id ? (
                    data.id === 1 ? (
                        <div className="flex w-full justify-end">
                            <span className="h-[1px] w-1/2 bg-white"></span>
                        </div>
                    ) : data.id === 3 ? (
                        <div className="flex w-full justify-start">
                            <span className="h-[1px] w-1/2 bg-white"></span>
                        </div>
                    ) : (
                        <span className="h-[1px] w-[120%] bg-white"></span>
                    )
                ) : null}
            </div>
            <div className="flex justify-center w-full">
                <span className="text-white">{data.date}</span>
            </div>
        </div>
    );
};

export default MarqueeCard;
