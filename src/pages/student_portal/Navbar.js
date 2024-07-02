import { useState } from "react";
import { ProfileDropDown } from "./application/ProfileDropDown";

const data = {
    name: "Harshit",
    avatar: "avatar",
    userid: "1"
}

function Navbar() {
    return (
        <nav className="bg-white border-0">
            <div className="flex items-center py-3 ">
                <div className="flex-none lg:flex-initial">
                    <div className="font-bold text-5xl">Student Nexus</div>
                    <text className="pt-4 text-2xl text-gray-500 font-inter">Hey there, {data ? data.name:"User "}!</text>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className="flex-1 w-96 flex items-center justify-end space-x-2 sm:space-x-6">
                        <form className="flex items-center space-x-2 border rounded-md p-2">
                            <svg
                                xmlns={data?data.avatar:"http://www.w3.org/2000/svg"}
                                className="h-5 w-5 flex-none text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-96 h-10 outline-none appearance-none placeholder-gray-500 text-gray-500 "
                                type="text"
                                placeholder="Search" />
                        </form>

                        <ProfileDropDown class="hidden lg:block" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
