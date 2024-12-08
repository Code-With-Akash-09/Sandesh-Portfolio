import React from "react";
import BlurCard from "../atoms/BlurCard";

const CareerCard = ({ data }) => {
    return (
        <>
            <div className="flex flex-col w-full items-end justify-end md:justify-start md:h-full md:w-96">
                <div className="flex w-full">
                    {data.topLine === true ? (
                        <div className="flex w-full">
                            <div className="flex w-1/3 items-center justify-center">
                                <span className="h-10 w-[1px] bg-white"></span>
                            </div>
                            <div className="flex justify-end w-2/3">
                                <span className="text-white">{data.date}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-end w-full">
                            <span className="text-white">{data.date}</span>
                        </div>
                    )}
                </div>
                <BlurCard data={data} />
                {data.bottomLine === true ? (
                    <div className="flex w-full">
                        <div className="flex w-1/3 items-center justify-center">
                            <span className="h-10 w-[1px] bg-white"></span>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default CareerCard;
