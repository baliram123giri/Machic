
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = { number: number; hover?: boolean };

function Stars({ number, hover }: Props) {
    return (
        <div
            className={`flex gap-0.5 group items-center ${hover
                ? "text-gray-400 hover:text-amber-400  cursor-pointer"
                : "text-amber-400"
                }`}
        >
            {Array(number)
                .fill(0)
                .map(() => (hover ? <AiOutlineStar /> : <AiFillStar />))}
        </div>
    );
}

export default Stars;
