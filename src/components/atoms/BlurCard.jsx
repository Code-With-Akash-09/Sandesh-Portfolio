import React from "react";

const BlurCard = ({ data }) => {
    return (
        <div className="flex flex-col p-4 gap-4 h-full w-full rounded-2xl border border-white backdrop-blur-sm">
            <span className="flex flex-col text-xl text-white font-bold w-fit relative after:flex after:absolute after:bg-white after:left-0 after:-bottom-1 after:contain-content after:z-10 after:h-1 after:w-2/3">
                {data.role}
            </span>
            <div className="flex w-full gap-2 text-white flex-col">
                {data.content.map((text, i) => (
                    <p key={i} className="text-sm md:text-base">
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default BlurCard;
