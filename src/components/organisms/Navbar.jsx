import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { UserCircle2Icon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex w-full border border-neutral-400 md:border-none">
            <div className="flex w-full items-center justify-between max-w-7xl mx-auto px-4 py-2">
                <div className="flex md:hidden w-fit">
                    <Button variant="ghost" size="icon">
                        <Menu className="!size-6" />
                    </Button>
                </div>
                <div className="flex w-fit">
                    <span className="text-2xl md:text-3xl font-semibold underline">
                        Sandesh Yewale
                    </span>
                </div>
                <div className="flex w-fit items-center gap-4">
                    <ul className="hidden md:flex w-fit gap-4 md:gap-6">
                        <li className="w-fit">
                            <Link
                                href={"/"}
                                className="px-2 text-base lg:text-xl"
                            >
                                Experience
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link
                                href={"/"}
                                className="px-2 text-base lg:text-xl"
                            >
                                Skills/Tools
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link
                                href={"/"}
                                className="px-2 text-base lg:text-xl"
                            >
                                Why Me?
                            </Link>
                        </li>
                        <li className="w-fit">
                            <Link
                                href={"/"}
                                className="px-2 text-base lg:text-xl"
                            >
                                My Story
                            </Link>
                        </li>
                    </ul>
                    <Button variant="ghost" size="icon">
                        <UserCircle2Icon className="!size-6" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
