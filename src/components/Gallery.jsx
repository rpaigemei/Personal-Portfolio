import Marquee from "react-fast-marquee";

import Design1 from "../assets/designs/eternal.png";
import Design2 from "../assets/designs/fd.png";
import Design3 from "../assets/designs/encore.png";
import Design4 from "../assets/designs/floridancer.png";
import Design5 from "../assets/designs/tote.png";

export default function Gallery() {
    return (
        <Marquee autoFill speed={50} pauseOnHover>
            <img src={Design1} alt="Eternal Show Shirt Design" className="img" />
            <img src={Design2} alt="FD Logo Design" className="img" />
            <img src={Design3} alt="Encore Show Shirt Design" className="img" />
            <img src={Design4} alt="It's Great to be a Floridancer Design" className="img" />
            <img src={Design5} alt="FD Tote Bag Design" className="img" />
        </Marquee>
    )
}