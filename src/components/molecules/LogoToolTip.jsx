import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";

const LogoToolTip = ({ className, data }) => {
    return (
        <>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <div
                        className={cn(
                            "flex w-4/5 h-4/5 relative aspect-square cursor-pointer",
                            className
                        )}
                    >
                        <Image
                            src={`/assets/tools-logo/${data.imgUrl}`}
                            alt="tools"
                            fill
                            className="object-contain"
                        />
                    </div>
                </HoverCardTrigger>
                <HoverCardContent>{data.description}</HoverCardContent>
            </HoverCard>
        </>
    );
};

export default LogoToolTip;
