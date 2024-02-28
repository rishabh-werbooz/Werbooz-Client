import React from "react"
import styles from "./projectOutline.module.css"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"

interface Props {
    description: string[]
    keywords: string[]
    heading: string[]
}

const index = ({ description, keywords, heading }: Props) => {
    return (
        <>
            <div className={`${styles.ProjectContainer}`}>
                <div>
                    <div className="mb-1">
                        <Heading_v1
                            data={{
                                heading: "Project Summary",
                            }}
                            className="font-xl fw-600  "
                        />
                    </div>
                    <Description
                        description="Dive into the captivating case study of Weekendo, a 60-day success story, where we faced challenges head-on and discovered ingenious solutions. Join Adit Chouhan and Werbooz as we navigate the twists and turns of creating an innovative weekend planning solution. This tale sheds light on how a beautiful website is constructed with meticulous care and how an cutting-edge proprietary software was born. Learn about the heart and soul of Weekendo, where we mixed modern-day advanced technologies with a beautiful idea. This narrative isn't just about technology; it's about people, passion, and the exciting Phase 2 that awaits. So why wait? Let's get started!"
                        className={`${styles.description} fw-400 font-sm mb-2`}
                    />
                    <div className={`${styles.keywords} gap-05 mt-1 mb-1 d-flex flex-wrap  align-items-center`}>
                        {["Designer", "Developer", "Illustration & Brand", "Creative", "Website"].map((keyword, index) => (
                            <span key={index} className={`${styles.btn_1} fw-600 font-sm`}>
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="mb-1">
                        <Heading_v1
                            data={{
                                heading: "Project Details",
                            }}
                            className="font-xl fw-600"
                        />
                    </div>
                    <div className={`${styles.ProjectDetailsContainer}`}>
                        <div>
                            <Heading_v1
                                data={{
                                    heading: "Duration :",
                                }}
                                className="font-md fw-600"
                            />
                            <Description description="March - April 2022 (3 Months)" className={`${styles.description} fw-400 font-sm mb-2`} />
                        </div>
                        <div>
                            <Heading_v1
                                data={{
                                    heading: "Website :",
                                }}
                                className="font-md fw-600"
                            />
                            <Description description="https://www.weekendo.in/" className={`${styles.description} fw-400 font-sm mb-2`} />
                        </div>
                        <div>
                            <Heading_v1
                                data={{
                                    heading: "Tools :",
                                }}
                                className="font-md fw-600"
                            />
                            <Description description="Figma, Illustration" className={`${styles.description} fw-400 font-sm mb-2`} />
                        </div>
                        <div>
                            <Heading_v1
                                data={{
                                    heading: "Technologies used :",
                                }}
                                className="font-md fw-600"
                            />
                            <Description description="Next JS, Express JS, Mongo DB, AWS   " className={`${styles.description} fw-400 font-sm mb-2`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
