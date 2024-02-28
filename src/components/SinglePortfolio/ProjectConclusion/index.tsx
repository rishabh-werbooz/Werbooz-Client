import React from "react"
import styles from "./projectConclusion.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import ProjectCard_v1 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v1"
import Description from "@/components/Description"
import Image from "@/components/Image"

interface Props {
    heading: string
    img: string[]
}

const index = ({ heading, img }: Props) => {
    return (
        <div className={`${styles.ProjectConclusionContainer}`}>
            <div>
                <Heading_v2
                    topHeading="Conclusion"
                    headingData={[
                        {
                            heading: "The Entire Narrative and Upcoming Phase Two",
                            color: "#FFFFFF",
                        },
                    ]}
                    className={`font-xxl fw-600  ${styles.topHeading}`}
                />
            </div>
            <div className="mt-2">
                <ProjectCard_v1 />
            </div>
            <div className={`d-flex gap-05 mt-2 flex-wrap ${styles.imgContainer}`}>
                <Image src="/assets/portfolios/SampleImg/Picture-1.svg" alt="Project Conclusion" />
                <Image src="/assets/portfolios/SampleImg/Picture-2.svg" alt="Project Conclusion" />
                <Image src="/assets/portfolios/SampleImg/Picture-3.svg" alt="Project Conclusion" />
                <Image src="/assets/portfolios/SampleImg/Picture-4.svg" alt="Project Conclusion" />
            </div>
        </div>
    )
}

export default index
