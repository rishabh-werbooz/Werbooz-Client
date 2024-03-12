import React from "react"
import styles from "./projectSolutionBox.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"
import ProjectCard_v3 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v3"

interface Props {
    data: {
        topHeading: string
        headingData: { heading: string; color: string }[]
        head_description: string[] | JSX.Element[] | string
        heading: string
        ProjectCard: {
            variant: string
            img: string
            heading: string
            ListItem: string[]
        }[]
        foot_description: string[] | JSX.Element[] | string
    }
}

const index : React.FC<Props> = ({ data}) => {
    return (
        <>
            <div className={styles.projectSolutionBox}>
                <div>
                    <Heading_v2 topHeading={data.topHeading} headingData={data.headingData} className={`font-xxl fw-600 ${styles.topHeading}`} />
                    <div className="mt-1">
                        <Description description={data.head_description} breakLine={true} className={`font-md fw-400 mt-1 ${styles.description}`} />
                    </div>
                    <div className="mt-1">
                        <Heading_v1
                            data={{
                                heading: data.heading,
                            }}
                            className={`font-lg fw-600 ${styles.heading}`}
                        />
                    </div>
                </div>
                <div>
                    <ProjectCard_v3 variant={data.ProjectCard[0].variant} img={data.ProjectCard[0].img} heading={data.ProjectCard[0].heading}
                        ListItem={data.ProjectCard[0].ListItem}
                     />
                </div>
                <div>
                    <ProjectCard_v3 variant={data.ProjectCard[1].variant} img={data.ProjectCard[1].img} heading={data.ProjectCard[1].heading}
                        ListItem={data.ProjectCard[1].ListItem}
                     />
                </div>
                <div>
                    <Description description={data.foot_description} className={`font-md fw-600 mt-1 text-primary text-italic`} />
                </div>
            </div>
        </>
    )
}

export default index
