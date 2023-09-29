import Image from "next/image";
import React from "react";
import photo from "@/assets/single-1-400x400.jpg";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";
type Props = {};

function ProductCard({ }: Props) {
    return (
        <div className="hover:shadow  border-white hover:border-neutral-300 ps-7 pr-4 pb-6">
            <Link href={"/product-details"}>
                <div className="flex items-center justify-center flex-col border-b pb-4 relative">
                    <Image width={150} src={photo} alt="product" />
                    <div className="absolute top-[3%] w-full  left-0 flex justify-between">
                        <div className="percent">
                            <button className="bg-red-600 text-white rounded-full p-1 px-3 text-xs font-semibold">11%</button>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <button className="border text-neutral-700 rounded-full p-2 text-xs font-semibold">
                                <AiOutlineHeart size={18} />
                            </button>
                            <button className="border  text-amber-400 rounded-full p-2 text-xs font-semibold">
                                <AiFillStar size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h6 className="text-[13px] font-semibold text-neutral-700">
                            Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
                        </h6>
                        <div className="flex">
                            <AiFillStar className="text-amber-400" />
                            <AiFillStar className="text-amber-400" />
                            <AiFillStar className="text-amber-400" />
                            <AiFillStar className="text-amber-400" />
                            <AiFillStar className="text-amber-400" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h6 className="text-[13px] font-semibold text-neutral-400">$699.99</h6>
                                <h4 className="text-[15px] font-semibold text-red-600">$629.99</h4>
                            </div>
                            <div>
                                <button className="border p-2 rounded-md"><BsFillCartCheckFill className="text-green-600" /></button>
                            </div>
                        </div>
                        <span className="text-xs text-neutral-500">2-day Delivery</span>
                    </div>
                </div>
            </Link>

            <div>
                <ul className="list-disc ps-4">
                    <li><span className="text-xs text-neutral-500">Screen Size 10.9 in</span></li>
                    <li><span className="text-xs text-neutral-500">Operating System Apple iOS</span></li>
                    <li><span className="text-xs text-neutral-500">Product Length 9.74 in</span></li>
                </ul>
            </div>
        </div>
    );
}

export default ProductCard;
