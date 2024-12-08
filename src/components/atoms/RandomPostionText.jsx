import { cn } from "@/lib/utils";
import React from "react";

const RandomPostionText = ({ text, className, underline }) => {
    return (
        <div className={cn("flex flex-col w-full items-center", className)}>
            <span
                className={`font-semibold text-2xl lg:text-3xl xl:text-4xl lg:font-semibold ${
                    underline
                        ? "underline underline-offset-4 decoration-2 decoration-neutral-400"
                        : ""
                }`}
            >
                {text}
            </span>
        </div>
    );
};

export default RandomPostionText;
