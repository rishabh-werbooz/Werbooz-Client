import React from "react"
import ProjectCard_v2 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v2"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import Heading_v2 from "@/components/Heading/Heading_v2"
import styles from "./projectDetails.module.css"
interface Props {
    topHeading: string
    heading: string[]
    img: string
}
const index = ({ topHeading, heading, img }: Props) => {
    return (
        <div>
            <BackgroundWrapper backgroundColor="#00327408">
                <div className={`main-inline-Padding mt-2 pt-2`}>
                    <Heading_v2
                        topHeading="Project Details"
                        headingData={[
                            {
                                heading: "This Undertaking Comprises of multiple,",
                                color: "#303030",
                            },
                            {
                                heading: " Systems tailored to meet client needs",
                                color: "#003274",
                            },
                        ]}
                        className={`font-xxl fw-600  ${styles.topHeading}`}
                    />

                    <ProjectCard_v2 variant="left" />
                </div>
            </BackgroundWrapper>
            <BackgroundWrapper backgroundColor="#FFFFFF">
                <div className="main-inline-Padding mt-2 pt-2">
                    <ProjectCard_v2 variant="right" />
                </div>
            </BackgroundWrapper>
            <BackgroundWrapper backgroundColor="#00327408">
                <div className="main-inline-Padding mt-2 pt-2">
                    <ProjectCard_v2 variant="left" />
                </div>
            </BackgroundWrapper>
        </div>
    )
}

export default index
