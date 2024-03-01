import React from "react"
import styles from "./projectIntroduction.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Description from "@/components/Description"
import ProjectListItems_v1 from "@/components/SinglePortfolio/ProjectListItems/ProjectListItem_v1"
import Image from "@/components/Image"
import ProjectCard_v1 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v1"

interface Props {
    topHeading: string[]
    heading: string[]
    img: string[]
    description: string
    ProjectListItems: string[]
    ProjectCards: {
        description: string[]
        img: string
    }
}

const index = ({ topHeading, heading, img, description, ProjectListItems, ProjectCards }: Props) => {
    return (
        <div className={`${styles.ProjectIntroductionContainer}`}>
            <div>
                <Heading_v2
                    topHeading={topHeading[0]}
                    headingData={[
                        {
                            heading: heading[0],
                            color: "white",
                        },
                    ]}
                    className="font-xxl fw-800"
                />

                <div className={`${styles.intro} mt-1`}>
                    <Description description={description} className={`fw-400 font-sm `} />
                </div>

                <div className={`${styles.PortfolioGridContainer} mt-2`}>
                    <div className={`${styles.PortfolioGrid}`}>
                        {img.map((img, index) => (
                            <Image src={img} alt="weekendo" className="border-radius-md" key={index} />
                        ))}
                    </div>

                    <div>
                        <ProjectListItems_v1 description={ProjectListItems} />
                    </div>
                </div>
                <div className="mt-2">
                    <Heading_v2
                        topHeading={topHeading[1]}
                        headingData={[
                            {
                                heading: heading[1],
                                color: "white",
                            },
                        ]}
                        className="font-xxl fw-800"
                    />
                    <div className="mt-1">
                        <ProjectCard_v1 description={ProjectCards.description} img={ProjectCards.img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
