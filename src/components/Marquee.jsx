import React from "react";
import Marquee from "react-fast-marquee";
import { FaCircle } from "react-icons/fa6";

export default function MarqueeDivider({ words }) {
    
    return (
        <Marquee autoFill speed={25} className="marquee">
            {words.map((word) => (
                <div className="word">
                    {word}

                    <FaCircle size={5} />
                </div>
            ))}
        </Marquee>
    )
}