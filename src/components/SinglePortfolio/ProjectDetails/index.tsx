import React from "react"
import ProjectCard_v2 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v2"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import Heading_v2 from "@/components/Heading/Heading_v2"
import styles from "./projectDetails.module.css"
interface Props {
    topHeading: string
    headingData: { heading: string; color: string }[]
    ProjectCard: {
        variant: string
        topHeading: string
        heading: string[]
        description: string[]
        img: string
    }[]
}
const index = ({ topHeading, headingData, ProjectCard }: Props) => {
    return (
        <div>
            <BackgroundWrapper backgroundColor="#00327408">
                <div className={`main-inline-Padding mt-2 pt-2`}>
                    <Heading_v2 topHeading={topHeading} headingData={headingData} className={`font-xxl fw-600  ${styles.topHeading}`} />

                    <ProjectCard_v2
                        variant={ProjectCard[0].variant}
                        topHeading={ProjectCard[0].topHeading}
                        heading={ProjectCard[0].heading}
                        description={ProjectCard[0].description}
                        img={ProjectCard[0].img}
                    />
                </div>
            </BackgroundWrapper>
            <BackgroundWrapper backgroundColor="#FFFFFF">
                <div className="main-inline-Padding mt-2 pt-2">
                    <ProjectCard_v2
                        variant={ProjectCard[1].variant}
                        topHeading={ProjectCard[1].topHeading}
                        heading={ProjectCard[1].heading}
                        description={ProjectCard[1].description}
                        img={ProjectCard[1].img}
                    />
                </div>
            </BackgroundWrapper>
            <BackgroundWrapper backgroundColor="#00327408">
                <div className="main-inline-Padding mt-2 pt-2">
                    <ProjectCard_v2
                        variant={ProjectCard[2].variant}
                        topHeading={ProjectCard[2].topHeading}
                        heading={ProjectCard[2].heading}
                        description={ProjectCard[2].description}
                        img={ProjectCard[2].img}
                    />
                </div>
            </BackgroundWrapper>
        </div>
    )
}

export default index
