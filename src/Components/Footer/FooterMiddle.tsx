import { footerLinks } from "@/constant";
import Link from "next/link";
import React from "react";

type Props = {};

function FooterMiddle({ }: Props) {
    return (
        <div className="bg-gray-100 py-14">
            <div className="container">
                <div className="flex flex-wrap flex-col lg:flex-row">
                    {footerLinks.map(({ id, name, subnav }) => (
                        <div key={id} className={`w-full md:w-1/4`}>
                            <h6 className="font-semibold mb-4">{name}</h6>
                            <ul>
                                {subnav.map((item) => <li key={item.id}><Link className="text-xs font-semibold  text-gray-500 hover:underline" href={item.link}>{item.name}</Link></li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterMiddle;
