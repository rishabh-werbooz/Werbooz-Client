import React from "react"
import styles from "./projectIntroduction.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Description from "@/components/Description"
import ProjectListItems_v1 from "@/components/SinglePortfolio/ProjectListItems/ProjectListItem_v1"
import Image from "@/components/Image"
import ProjectCard_v1 from "@/components/SinglePortfolio/ProjectCards/ProjectCard_v1"

interface ProjectIntroductionProps {
    data: {
        headings: {
            headingData_1: {
                heading: string
                color: string
            }[]
            headingData_2: {
                heading: string
                color: string
            }[]
        }
        description: string[] | JSX.Element[] | string | JSX.Element
        img: string[]
        ProjectListItems: string[]
        ProjectCards: {
            description: string[] | JSX.Element[] | string | JSX.Element
            img: string
        }
    }
}

const index: React.FC<ProjectIntroductionProps> = ({ data }) => {
    return (
        <div className={`${styles.ProjectIntroductionContainer}`}>
            <div>
                <Heading_v2 topHeading={data.headings.headingData_1[0].heading} headingData={[data.headings.headingData_1[1]]} className="font-xxl fw-800 text-white" />

                <div className={`${styles.intro} mt-1`}>
                    <Description description={data.description} className={`fw-400 font-sm `} />
                </div>

                <div className={`${styles.PortfolioGridContainer} mt-2`}>
                    {data.img.length > 1 ? (
                        <div className={`${styles.PortfolioGrid}`}>
                            {data.img.map((img, index) => (
                                <Image src={img} alt="weekendo" className="border-radius-md" key={index} />
                            ))}
                        </div>
                    ) : (
                        <Image src={data.img[0]} alt="weekendo" className="border-radius-md" />
                    )}

                    <div>
                        <ProjectListItems_v1 description={data.ProjectListItems} />
                    </div>
                </div>
                <div className="mt-2">
                    <Heading_v2 topHeading={data.headings.headingData_2[0].heading} headingData={[data.headings.headingData_2[1]]} className="font-xxl fw-800 text-white" />
                    <div className="mt-1">
                        <ProjectCard_v1 description={data.ProjectCards.description} img={data.ProjectCards.img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
