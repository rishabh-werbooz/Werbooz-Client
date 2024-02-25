import React from "react"
import styles from "./projectSolutionBox.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"
import ProjectCard_v3 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v3"

const index = () => {
    return (
        <>
            <div className={styles.projectSolutionBox}>
                <div>
                    <Heading_v2
                        topHeading="Solution"
                        headingData={[{ heading: "Aiming for more than usual ", color: "#303030" }]}
                        className={`font-xxl fw-600 ${styles.topHeading}`}
                    />
                    <div className="mt-1">
                        <Description
                            description="Weekendo had a vision of what they wanted and they chose Werbooz to help them build their own proprietary software and website. The client came to us with a detailed list of what they exactly want and after getting an understanding of the client requirements we started following our standard process such as creating wireframes, Figma designs, and prototypes. Once the client approved the prototypes, we started working on both the weekendo tool and their website."
                            className={`font-md fw-400 mt-1 ${styles.description}`}
                        />

                        <Description
                            description="we wanted to create a fully-fledged system that isn’t dependent on other tools but a custom tool that is built from scratch catering all requirements for preparing a newsletter and managing platform."
                            className={`font-md fw-400 mt-1 ${styles.description}`}
                        />
                    </div>
                    <div className="mt-1">
                        <Heading_v1
                            data={{
                                heading: "The prototypes were built for 2 things :",
                            }}
                            className={`font-lg fw-600 ${styles.heading}`}
                        />
                    </div>
                </div>
                <div>
                    <ProjectCard_v3 variant="right" />
                </div>
                <div>
                    <ProjectCard_v3 variant="left" />
                </div>
                <div>
                    <Description
                        description="After building the prototypes and after getting clients approval we broke the entire Weekendo tool into smaller modules and after that we started designing weekendo’s website"
                        className={`font-md fw-400 mt-2 ${styles.description}`}
                    />
                    <Description
                        description="To make sure the front end and back-end work together smoothly, we crafted a reliable set of flexible APIs and Our skilled in-house programming team did a fantastic job, making it easy for us to collaborate seamlessly on both the front and back ends. What's more, we managed to integrate the APIs into both sides at the same time by breaking down the system into smart, manageable pieces."
                        className={`font-md fw-400 mt-1 ${styles.description}`}
                    />
                </div>
            </div>
        </>
    )
}

export default index
