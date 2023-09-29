
import { navbarMenu } from "@/constant";
import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { FcHeadset } from "react-icons/fc";
import { BiSolidOffer } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import AppDepartment from "./AppDepartment";
import Link from "next/link";
type Props = {};

function Menu({ }: Props) {

    return (
        <div className="mt-5 lg:flex hidden justify-between items-center border-b ">
            {/* dropdown  */}
            <AppDepartment />
            {/* //Menu  */}
            {navbarMenu.map((ele, key) => {
                if (!ele.subnav && ele.path)
                    return (
                        <div key={key} className="flex cursor-pointer hover:text-blue-500">
                            <Link href={ele.path}> <div className="cursor-pointer items-center gap-1 flex py-2 hover:text-blue-500">
                                {ele.title === "Cellphone" ? <AiOutlineMobile /> : ele.title === "Hedphone" ? <FcHeadset /> : null}
                                {ele.title}{" "}
                            </div></Link>
                        </div>
                    );
                return (
                    <div key={key} className="flex group">
                        <div className="cursor-pointer flex py-2 hover:text-blue-500">
                            {" "}
                            {ele.title}{" "}
                            <RiArrowDropDownLine style={{ strokeWidth: 0.1 }} size={20} className="text-neutral-500  hover:text-blue-500 mt-0.5 " />
                        </div>
                        {/* //subnav */}
                        <div className="bg-white border z-10 h-[275px] group-hover:flex justify-between hidden py-4 px-14 w-[85%] left-[7.5%] shadow-sm rounded-sm absolute top-[21%]">
                            {ele?.subnav?.map((item, itemKey) => {
                                return (
                                    <div key={itemKey}>
                                        <h6 className="text-sm font-semibold text-blue-500">
                                            {item.title}
                                        </h6>
                                        <ul className="mt-4">
                                            {item.list.map((ele) => <li key={ele} className="text-xs hover:underline my-2 cursor-pointer">{ele}</li>)}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            {/* //offers  */}
            <div className="flex  items-center gap-4">
                <BiSolidOffer size={25} className="text-red-500" />
                <div className="flex  items-center gap-4">
                    <div>
                        <span className="text-xs text-neutral-500">Only this weekend</span>
                        <h6 className="flex items-center gap-4 -mt-1">Super Discount</h6>
                    </div>
                    <RiArrowDropDownLine size={25} className="text-neutral-500" />
                </div>
            </div>
        </div>
    );
}

export default Menu;
