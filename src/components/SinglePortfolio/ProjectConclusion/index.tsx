import React from "react"
import styles from "./projectConclusion.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import ProjectCard_v1 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v1"
import Description from "@/components/Description"
import Image from "@/components/Image"

interface Props {
    heading: {
        heading: string
        color: string
    }[]
    img: string[]
    ProjectCard: {
        description: string[]
        img: string
    }
}

const index = ({ heading, img, ProjectCard }: Props) => {
    return (
        <div className={`${styles.ProjectConclusionContainer}`}>
            <div>
                <Heading_v2
                    topHeading="Conclusion"
                    headingData={heading}
                    className={`font-xxl fw-600 text-white  ${styles.topHeading}`}
                />
            </div>
            <div className="mt-2">
                <ProjectCard_v1
                    description={ProjectCard.description}
                    img={ProjectCard.img}
                 />
            </div>
            <div className={`d-flex gap-05 mt-2 flex-wrap ${styles.imgContainer}`}>
                {
                    img.map((img, index) => (
                        <Image src={img} alt="Project Conclusion" key={index} className={styles.img} />
                    ))
                }
            </div>
        </div>
    )
}

export default index
