import React from "react"
import styles from "./projectSolutionBox.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"
import ProjectCard_v3 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v3"

interface Props {
    topHeading: string
    description: string[]
    headingData: { heading: string; color: string }[]
    heading: string
    ProjectCard: {
        variant: string
        img: string
        heading: string
        ListItem: string[]
    }[]
}

const index = ({ topHeading, description, headingData, heading, ProjectCard}: Props) => {
    return (
        <>
            <div className={styles.projectSolutionBox}>
                <div>
                    <Heading_v2 topHeading={topHeading} headingData={headingData} className={`font-xxl fw-600 ${styles.topHeading}`} />
                    <div className="mt-1">
                        <Description description={description[0]} className={`font-md fw-400 mt-1 ${styles.description}`} />

                        <Description description={description[1]} className={`font-md fw-400 mt-1 ${styles.description}`} />
                    </div>
                    <div className="mt-1">
                        <Heading_v1
                            data={{
                                heading: heading,
                            }}
                            className={`font-lg fw-600 ${styles.heading}`}
                        />
                    </div>
                </div>
                <div>
                    <ProjectCard_v3 variant={ProjectCard[0].variant} img={ProjectCard[0].img} heading={ProjectCard[0].heading}
                        ListItem={ProjectCard[0].ListItem}
                     />
                </div>
                <div>
                    <ProjectCard_v3 variant={ProjectCard[1].variant} img={ProjectCard[1].img} heading={ProjectCard[1].heading}
                        ListItem={ProjectCard[1].ListItem}
                     />
                </div>
                <div>
                    <Description description={description[2]} className={`font-md fw-400 mt-2 ${styles.description}`} />
                    <Description description={description[3]} className={`font-md fw-600 mt-1 text-primary text-italic`} />
                </div>
            </div>
        </>
    )
}

export default index
