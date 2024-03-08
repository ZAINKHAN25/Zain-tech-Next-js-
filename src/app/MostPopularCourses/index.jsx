"use client"

import Image from "next/image";
import WebsiteBtn from "../Button.jsx";

import "./MostPopularCourses.css"

export default function MostPopularCourses() {

    let courses = [
        {
            courseImg: "https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg",
            courseTitle: "Cyber Security"
        },
        {
            courseImg: "https://nandbox.com/wp-content/uploads/2023/08/The-Future-of-UX-Design-Trends-to-Consider-in-2023.webp",
            courseTitle: "Ui/Ux Design"
        },
        {
            courseImg: "https://digitaltribe.ae/wp-content/uploads/2021/05/Graphic-designing.jpg",
            courseTitle: "Graphic Designing"
        }
    ]


    return (
        <div className="MostPopularCoursesDiv">
            <div className="UpwardLine">
                <span>Most Popular Courses</span>
                <WebsiteBtn cntnt={"View All"} />
            </div>
            <div className="fatherDivOfCourses">
                {
                    courses.map((x, i) => {
                        return (
                            <div className="singleDivOfCourse" key={i}>
                                <Image src={x?.courseImg} width={230} height={250} style={{borderRadius: "10px", objectFit: "cover"}} />
                                <div className="txtAreaOfSingleDiv">
                                    <h5>{x.courseTitle}</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat dignissimos nobis nemo incidunt deserunt, tempora nulla sed corrupti quae explicabo animi laboriosam numquam sapiente eaque ea similique laudantium? Doloribus.</p>
                                    <WebsiteBtn cntnt={"Enroll Now"} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}