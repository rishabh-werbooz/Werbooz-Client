import React from "react"
import ProjectCard_v2 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v2"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import Heading_v2 from "@/components/Heading/Heading_v2"
import styles from "./projectDetails.module.css"

interface Props {
    data: {
        topHeading: string
        headingData: { heading: string; color: string }[]
        ProjectCard: {
            bgColor: string
            variant: string
            img: string
            cardContent: {
                topHeading: string
                headingData: { heading: string; color: string }[]
                heading: string
                description: string | JSX.Element | string[] | JSX.Element[]
            }[]
        }[]
    }
}

const index = ({ data }: Props) => {
    return (
        <div>
            {data.ProjectCard.map((content, index) => (
                <BackgroundWrapper backgroundColor={content.bgColor} key={index}>
                    <div className={`main-inline-Padding py-5`}>
                        {index == 0 && <Heading_v2 topHeading={data.topHeading} headingData={data.headingData} className={`font-xxl fw-600  ${styles.topHeading}`} />}

                        <ProjectCard_v2 content={content} />
                    </div>
                </BackgroundWrapper>
            ))}

            {/* <BackgroundWrapper backgroundColor="#FFFFFF">
                <div className="main-inline-Padding py-5">
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
                <div className="main-inline-Padding py-5">
                    <ProjectCard_v2
                        variant={ProjectCard[2].variant}
                        topHeading={ProjectCard[2].topHeading}
                        heading={ProjectCard[2].heading}
                        description={ProjectCard[2].description}
                        img={ProjectCard[2].img}
                    />
                </div>
            </BackgroundWrapper> */}
        </div>
    )
}

export default index
