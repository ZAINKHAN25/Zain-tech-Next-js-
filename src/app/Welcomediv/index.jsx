import Image from "next/image";

import "./welcomeDiv.css"
import pic from "./pic.png"

export default function Welcomediv() {
    return (
        <div className="welcomeDiv">
            <div className="textAreaWelcome">

                <span className="headingOfWelcome">
                    Best online platform for <span>learning</span>
                </span>
                <p className="paraOfWelcomeDiv">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minima, dolorum recusandae praesentium quasi incidunt possimus dolorem voluptas laudantium commodi autem aperiam deserunt alias voluptatem natus, ipsa, sint optio impedit!
                </p>

                <button className="getStartedBtn">Get Started</button>


            </div>
            <div className="pictureDivWelcome">
                <Image
                    src={pic}
                    width={600}
                    height={300}
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    )
}