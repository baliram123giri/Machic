"use client";
import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { BsCheck2 } from "react-icons/bs";
const categories: string[] = [
    "iPhone",
    "Phone Accesseories",
    "Phone Cases",
    "Postpaid",
    "Prepaid Phones",
    "Prepaid Plans",
    "Refubrish Phones",
    "Samsung Galaxy",
    "Strait Talk",
    "Unlocked Phones",
];
export default function FilterList() {
    const [selected, setSelected] = React.useState<string[]>([]);
    const [rangeSelected, setRangeSelected] = React.useState<number | number[]>([0, 1500]);

    return (
        <div className="flex flex-col gap-3 pt-4">
            <CheckboxGroup
                label=""
                color="primary"
                value={selected}
                style={{ fontSize: 10 }}
                onValueChange={setSelected}
            >
                {categories.map((ele) => <Checkbox size="sm" radius="none" key={ele} value={ele}>{ele}</Checkbox>)}
            </CheckboxGroup>
            <h4 className="text-sm mt-4">Filter by price</h4>
            {/* //Filter by price  */}
            <div className="border-t pt-4 px-2">
                <div className="flex items-center justify-between mb-3">
                    <div> <span className="text-sm font-light">Price:</span> <span>${Array.isArray(rangeSelected) && rangeSelected[0].toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 })}---${Array.isArray(rangeSelected) && rangeSelected[1].toLocaleString(undefined, { maximumFractionDigits: 0, minimumFractionDigits: 0 })}</span></div>
                    <button className="bg-gray-300 py-1 px-2 text-xs rounded-sm">FILTER</button>
                </div>
                <Slider value={rangeSelected} min={0} max={5000} onChange={(value) => setRangeSelected(value)} trackStyle={{ background: "#4361ee" }} handleStyle={{ background: "#4361ee", border: "none", opacity: 1 }} range />
            </div>

            <h4 className="text-sm mt-4">Filter by Color</h4>
            <div className="border-t pt-4 px-2 space-y-3">
                <div className="flex group items-center gap-3 cursor-pointer ">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-black">
                        <div className="hidden group-hover:block">
                            <BsCheck2 size={14} color="white" />
                        </div>
                    </div>
                    <span className="text-sm font-light">Black</span>
                </div>
                <div className="flex group items-center gap-3 cursor-pointer ">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#00bbf9]">
                        <div className="hidden group-hover:block">
                            <BsCheck2 size={14} color="white" />
                        </div>
                    </div>
                    <span className="text-sm font-light">Blue</span>
                </div>
                <div className="flex group items-center gap-3 cursor-pointer ">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#212529]">
                        <div className="hidden group-hover:block">
                            <BsCheck2 size={14} color="white" />
                        </div>
                    </div>
                    <span className="text-sm font-light">Brown</span>
                </div>
                <div className="flex group items-center gap-3 cursor-pointer ">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-400">
                        <div className="hidden group-hover:block">
                            <BsCheck2 size={14} color="white" />
                        </div>
                    </div>
                    <span className="text-sm font-light">Gray</span>
                </div>
                <div className="flex group items-center gap-3 cursor-pointer ">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-400">
                        <div className="hidden group-hover:block">
                            <BsCheck2 size={14} color="white" />
                        </div>
                    </div>
                    <span className="text-sm font-light">Green</span>
                </div>
                <div className="flex group items-center gap-3 cursor-pointer ">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-400">
                        <div className="hidden group-hover:block">
                            <BsCheck2 size={14} color="white" />
                        </div>
                    </div>
                    <span className="text-sm font-light">Orange</span>
                </div>
                <div className="flex group items-center gap-3 cursor-pointer ">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-red-600">
                        <div className="hidden group-hover:block">
                            <BsCheck2 size={14} color="white" />
                        </div>
                    </div>
                    <span className="text-sm font-light">Red</span>
                </div>
            </div>

            <h4 className="text-sm mt-4">Product Status</h4>
            <div className="border-t pt-4 px-2 space-y-3">
                <CheckboxGroup
                    label=""
                    color="primary"
                    style={{ fontSize: 10 }}
                >
                    <Checkbox size="sm" radius="none" value={"In Stock"}>In Stock</Checkbox>
                    <Checkbox size="sm" radius="none" value={"On Sale"}>On Sale</Checkbox>
                </CheckboxGroup>
            </div>
            <h4 className="text-sm mt-4">Brands</h4>
            <div className="border-t pt-4 px-2 space-y-3">
                <CheckboxGroup
                    label=""
                    color="primary"
                    style={{ fontSize: 10 }}
                >
                    <Checkbox size="sm" radius="none" value={"Apple"}>Apple</Checkbox>
                    <Checkbox size="sm" radius="none" value={"Samsung"}>Samsung</Checkbox>
                </CheckboxGroup>
            </div>
        </div>
    );
}
